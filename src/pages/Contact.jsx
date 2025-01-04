import React from "react";

export const Contact = () => {
  return (
    <div style={{ margin: "2rem" }}>
      <h2>Contact Me</h2>
      <form
        name="contact" // Formun ismi
        method="POST"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label>Name:</label>
          <input type="text" name="name" required />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>

        <div>
          <label>Message:</label>
          <textarea name="message" required></textarea>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;