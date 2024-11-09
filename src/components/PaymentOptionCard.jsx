const PaymentOptionCard = () => {
  return (
    <>
      <section className="container text-center py-5 mb-5 bg-secondary">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100 text-center p-4 border-0 shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=RXMBNCrLmBht&format=png&color=000000"
                alt="Free Delivery"
                className="mx-auto mb-3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Free Delivery</h5>
                <p className="card-text">
                  Enjoy free delivery on all orders with no minimum purchase
                  required.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 text-center p-4 border-0 shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=9BO8KPzyjld9&format=png&color=000000"
                alt="Secure Payments"
                className="mx-auto mb-3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Secure Payments</h5>
                <p className="card-text">
                  Your payments are safe with our advanced encryption
                  technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 text-center p-4 border-0 shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=78231&format=png&color=000000"
                alt="Multiple Payment Options"
                className="mx-auto mb-3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">Multiple Payment Options</h5>
                <p className="card-text">
                  Choose from a range of payment methods including credit cards,
                  PayPal, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 text-center p-4 border-0 shadow-sm">
              <img
                src="https://img.icons8.com/?size=100&id=vxficvTMbWPU&format=png&color=000000"
                alt="30-Day Return Policy"
                className="mx-auto mb-3"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">30-Day Return Policy</h5>
                <p className="card-text">
                  Return any product hassle-free within 30 days of your
                  purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentOptionCard;
