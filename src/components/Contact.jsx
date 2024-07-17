import { Section } from "./Interface";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("meojonea");

  return (
    <Section id="contact">
      {/* <h1 className="sect">contact</h1> */}

      <h2 className="contact-title">Contact me</h2>
      <div className="contact-container">
        {state.succeeded ? (
          <p className="contact-message">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="contact-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="contact-input"
            />
            <label htmlFor="email" className="contact-label mt-8">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="contact-input"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message" className="contact-label mt-8">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="contact-textarea"
            />
            <ValidationError errors={state.errors} />
            <button
              className="contact-submit-button"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

export default Contact;
