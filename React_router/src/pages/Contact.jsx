import React from "react";

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact MediMart</h1>
      <p>If you need help finding a medicine or have a question, send us a note.</p>
      <form className="contact-form">
        <label>
          Name
          <input type="text" placeholder="Enter your name" />
        </label>
        <label>
          Email
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Message
          <textarea rows="5" placeholder="Tell us how we can help"></textarea>
        </label>
        <button className="button primary" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;