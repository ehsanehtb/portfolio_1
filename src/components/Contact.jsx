import { Section } from "./Interface";

const Contact = () => {
    return (
    <Section id="contact">
      {/* <h1 className="sect">contact</h1> */}

      <h2 className="contact-title">Contact me</h2>
      <div className="Contact-container">
        <form>
          <label htmlFor="name" className="contact-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="contact-input"
          />
          <label
            htmlFor="email"
            className="contact-label mt-8"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="contact-input"
          />
          <label
            htmlFor="message"
            className="contact-label mt-8"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="contact-textarea"
          />
          <button className="contact-button">
            Submit
          </button>
        </form>
      </div>
    </Section>
    );
  };

  export default Contact