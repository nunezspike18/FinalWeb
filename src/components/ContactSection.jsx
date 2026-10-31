import { useState } from "react";

export default function ContactSection() {
  const [formNote, setFormNote] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    setFormNote(
      `Thanks, ${name || "there"}! Your message is ready to be connected to your email service.`,
    );
    event.currentTarget.reset();
  };

  return (
    <section className="contact section-light" id="contact">
      <div className="container contact-box reveal">
        <div>
          <p className="eyebrow dark">
            <span />
            GET IN TOUCH
          </p>
          <h2>
            Have an idea?
            <br />
            <em>Let&apos;s build it.</em>
          </h2>
          <p className="contact-copy">
            For school projects, collaborations, or opportunities, feel free to
            reach out.
          </p>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <span className="contact-icon">☎</span>
            <div>
              <small>MOBILE NUMBER</small>
              <a href="tel:09563563926">09563563926</a>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">✉</span>
            <div>
              <small>EMAIL</small>
              <a href="mailto:nspike181@gmail.com">nspike181@gmail.com</a>
            </div>
          </div>
          <div className="contact-detail">
            <span className="contact-icon">f</span>
            <div>
              <small>FACEBOOK</small>
              <a href="#" aria-label="Facebook: Nu ñez">
                Nu ñez
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                required
              />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message <span>↗</span>
            </button>
            <p className="form-note" aria-live="polite">
              {formNote}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
