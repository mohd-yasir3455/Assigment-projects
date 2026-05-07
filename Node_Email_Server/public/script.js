const form = document.getElementById("emailForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  feedback.textContent = "Sending message...";
  feedback.className = "feedback";

  const body = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim()
  };

  try {
    const response = await fetch("/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    const result = await response.json();
    if (!result.ok) {
      throw new Error(result.error || "Unable to send email.");
    }

    feedback.textContent = `Email sent successfully! ${result.preview ? `Preview: ${result.preview}` : "Check your inbox."}`;
    feedback.classList.add("success");
    form.reset();
  } catch (error) {
    feedback.textContent = error.message;
    feedback.classList.add("error");
  }
});
