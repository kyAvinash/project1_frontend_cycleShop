const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h3>Contact</h3>
            <p>
              123 Ghazipur, Uttar Pradesh
              <br />
              233001, India
            </p>
            <p>+91- 9148903040</p>
            <p>info@cyclewalacare.com</p>
          </div>

          <div className="col-md-6 text-center">
            <h3 className="py-4">
              <span style={{ fontSize: "30px" }}>&#128690;</span> Cycle Wala
            </h3>
            <p>
              The journey of cycling is a freedom that never fades, but it never
              compares to the lasting joy that the love of cycling brings to
              your soul and the open road.
            </p>
          </div>
        </div>
        <hr className="bg-danger" />
        <p className="text-center mb-0">
          Copyright &copy; 2024 Cycle Wala. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
