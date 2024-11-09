import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentOptionCard from "../components/PaymentOptionCard";

const FAQ = () => {
  return (
    <>
      <Header />
      <main>
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-danger fw-bold display-2"
            style={{ padding: "150px 0" }}
          >
            Frequently Asked Questions
          </h1>
        </section>

        <section className="container py-5">
          <h2 className="text-center display-5 fw-bold mb-4">FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <h4>Do you offer international shipping?</h4>
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  No, we are not offering international shipping at this time.
                  However, we provide shipping services across multiple
                  locations within the country. Please check our shipping
                  details for more information.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <h4>What is your return policy?</h4>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  We offer a 30-day return policy for unused and undamaged
                  products. You can initiate a return through our website, and
                  we'll provide a shipping label for returning the product.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <h4>How do I schedule a repair or maintenance service?</h4>
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  You can schedule a repair or maintenance service by visiting
                  our services page and selecting a date and time. We offer
                  in-store and mobile services.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <h4>Can I customize my bike before purchasing?</h4>
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we offer bike customization options. You can select
                  different components, colors, and accessories during the
                  purchase process to create your perfect bike.
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <h4>Do you provide bike rentals?</h4>
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Yes, we offer short-term and long-term bike rentals for all
                  kinds of rides. Check our rentals page for pricing and
                  availability.
                </div>
              </div>
            </div>
          </div>
        </section>

        <PaymentOptionCard/>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
