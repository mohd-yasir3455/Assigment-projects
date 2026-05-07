import http from "http";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, "public");
const PORT = process.env.PORT || 3000;

const logRequest = (req, status) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url} ${status}`);
};

const sendJson = (res, status, data) => {
  res.writeHead(status, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const getMimeType = (pathname) => {
  if (pathname.endsWith(".html")) return "text/html";
  if (pathname.endsWith(".css")) return "text/css";
  if (pathname.endsWith(".js")) return "application/javascript";
  if (pathname.endsWith(".json")) return "application/json";
  return "application/octet-stream";
};

const loadStaticFile = async (req, res, pathname) => {
  try {
    const filePath = path.join(publicDir, pathname === "/" ? "index.html" : pathname);
    const data = await fs.readFile(filePath);
    res.writeHead(200, { "Content-Type": getMimeType(filePath) });
    res.end(data);
    logRequest(req, 200);
  } catch (error) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    logRequest(req, 404);
  }
};

const parseBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        const parsed = JSON.parse(body);
        resolve(parsed);
      } catch {
        const params = new URLSearchParams(body);
        const data = Object.fromEntries(params.entries());
        resolve(data);
      }
    });
    req.on("error", reject);
  });

const createTransporter = async () => {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;

  if (user && pass && host && port) {
    return nodemailer.createTransport({
      host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass }
    });
  }

  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: testAccount.smtp.host,
    port: testAccount.smtp.port,
    secure: testAccount.smtp.secure,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
};

const sendMail = async ({ name, email, subject, message }) => {
  const transporter = await createTransporter();
  const info = await transporter.sendMail({
    from: "MediMart <no-reply@medimart.example>",
    to: email,
    subject: `MediMart order confirmation: ${subject}`,
    html: `
      <h2>Hello ${name || "Customer"},</h2>
      <p>Thanks for contacting MediMart.</p>
      <p><strong>Message received:</strong></p>
      <blockquote>${message}</blockquote>
      <p>We will respond to <strong>${email}</strong> shortly.</p>
      <p>Thank you for choosing MediMart.</p>
    `
  });

  return {
    messageId: info.messageId,
    preview: nodemailer.getTestMessageUrl(info) || null
  };
};

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.method === "GET" && (url.pathname === "/" || url.pathname.endsWith(".css") || url.pathname.endsWith(".js"))) {
    return loadStaticFile(req, res, url.pathname);
  }

  if (req.method === "POST" && url.pathname === "/send") {
    try {
      const body = await parseBody(req);
      const validationFields = ["name", "email", "subject", "message"];
      const missing = validationFields.filter((field) => !body[field]);
      if (missing.length) {
        logRequest(req, 400);
        return sendJson(res, 400, { ok: false, error: `Missing fields: ${missing.join(", ")}` });
      }

      const result = await sendMail(body);
      logRequest(req, 200);
      return sendJson(res, 200, { ok: true, ...result });
    } catch (error) {
      console.error(error);
      logRequest(req, 500);
      return sendJson(res, 500, { ok: false, error: "Failed to send email." });
    }
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Not Found");
  logRequest(req, 404);
});

server.listen(PORT, () => {
  console.log(`Node email server is running on http://localhost:${PORT}`);
  console.log("Use npm run dev for live reload with nodemon.");
});
