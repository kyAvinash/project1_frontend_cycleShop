import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alertMessage, setAlertMessage] = useState({
    type: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://project1backend-navy.vercel.app/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAlertMessage({
          type: "success",
          message: data.message,
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setAlertMessage({
          type: "danger",
          message: data.error || "Error submitting form.",
        });
      }
    } catch (error) {
      setAlertMessage({
        type: "danger",
        message: "There was a problem submitting the form. Please try again.",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-danger fw-bold display-2"
            style={{ padding: "150px 0" }}
          >
            Contact Us
          </h1>
        </section>

        <section className="container text-center py-5">
          <h2 className="display-5 fw-bold">We Are Here to Help</h2>
          <p className="lead">
            Reach out to us through any of the following means and we'll be
            happy to assist you.
          </p>
        </section>

        <section className="container py-5">
          <div className="row g-4">
            <div className="col-md-6">
              <h3 className="fw-bold mb-4">Get in Touch</h3>
              {alertMessage.message && (
                <div
                  className={`alert alert-${alertMessage.type}`}
                  role="alert"
                >
                  {alertMessage.message}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            <div className="col-md-6">
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg"
                alt="Contact Us"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        <section className="container-fluid py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center fw-bold mb-4">Find Us</h3>
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28791.282213154183!2d83.55059597627215!3d25.574651669095406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991ff78350bdfbf%3A0xc4a72451c0503586!2sGhazipur%2C%20Uttar%20Pradesh%20233001!5e0!3m2!1sen!2sin!4v1726593654035!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
