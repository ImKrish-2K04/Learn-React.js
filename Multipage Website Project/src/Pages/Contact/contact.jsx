export const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    const submittedFormData = Object.fromEntries(formData.entries());
    console.log(submittedFormData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="false"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="false"
          />

          <textarea
            className="form-control"
            rows={10}
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="false"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};
