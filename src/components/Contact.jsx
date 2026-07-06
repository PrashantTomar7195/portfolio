import "./Contact.css";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    formData.append(
      "access_key",
      "b7161bb7-2599-4802-b176-16f6f4d26596"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    console.log(result);

    if (result.success) {
      alert("✅ Message Sent Successfully!");
      form.current.reset();
    } else {
      alert("❌ Failed to send message!");
      console.log(result);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect 🚀</h3>

          <p>
            I'm actively looking for Java Full Stack Developer and Software
            Engineer opportunities. Feel free to contact me.
          </p>

          <div className="info">
            <strong>📧 Email</strong>
            <span>prashanttomar5749@gmail.com</span>
          </div>

          <div className="info">
            <strong>📱 Phone</strong>
            <span>+91 6396705680</span>
          </div>

          <div className="info">
            <strong>📍 Location</strong>
            <span>Aligarh, Uttar Pradesh</span>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/PrashantTomar7195"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-tomar-5832122a6/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://leetcode.com/u/Prashanttomar7195"
              target="_blank"
              rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Write your message..."
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;