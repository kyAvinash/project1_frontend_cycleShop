import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Header />
      <main>
        
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1466493/pexels-photo-1466493.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-danger fw-bold display-2" style={{ padding: "150px 0" }}>About</h1>
        </section>

        
        <section className="container text-center py-5">
          <h2 className="display-5 fw-bold">Our Company History</h2>
          <p className="lead">
            Established in 2024, Cycle Wala started as a local shop and has grown into
            a global online community for cycle lovers. Our dedication to quality 
            and passion for cycling drives us to continually innovate and inspire 
            to make our planet greener and pollution-free.
          </p>
        </section>

       
        <section className="container text-center">
          <div className="row bg-light g-4 mb-5">
            <div className="col-md-6">
              <div className="card h-100 p-4 d-flex flex-column">
                <h2 className="mb-4">What We Do</h2>
                <p className="lead flex-grow-1">
                  We offer a variety of products and services to cater to cycling enthusiasts and casual riders alike.
                  Our offerings include:
                  <br /> Bicycles, Accessories, Repairs and Maintenance, Customization, Rentals, and Bike Fitting.
                </p>
                <Link to="/shop" className="btn btn-success mt-auto">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 p-4">
                <img
                  src="https://www.herocycles.com/on/demandware.static/-/Sites-HeroCycles-Library/default/dw5e74b2dd/Homepage/Topbanner/hdfc-new.jpg"
                  alt="Cycling"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </section>

      
        <section className="container text-center py-5">
          <h2 className="display-5 fw-bold">Our Team</h2>
          <p className="lead">Meet our dedicated team that makes everything possible.</p>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="card text-center">
                <img src="https://avatars.githubusercontent.com/u/141410339?v=4" alt="Team Member" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "100px" }} />
                <div className="card-body">
                  <h5 className="card-title">Avinash Kumar Yadav</h5>
                  <p className="card-text">Developer/Shop Owner</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img src="https://avatars.githubusercontent.com/u/380492?v=4" alt="Team Member" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "100px" }} />
                <div className="card-body">
                  <h5 className="card-title">Jane Smith</h5>
                  <p className="card-text">Workshop Mechanics</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img src="https://avatars.githubusercontent.com/u/546885?v=4" alt="Team Member" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "100px" }} />
                <div className="card-body">
                  <h5 className="card-title">Mark Johnson</h5>
                  <p className="card-text">Store Manager</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center">
                <img src="https://avatars.githubusercontent.com/u/5777036?v=4" alt="Team Member" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "100px" }} />
                <div className="card-body">
                  <h5 className="card-title">Emily Davis</h5>
                  <p className="card-text">Sales Staff</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="container text-center py-5">
          <h2 className="display-5 fw-bold">Why Choose Us</h2>
          <p className="lead">
            We stand out because of our unwavering commitment to providing high-quality products and exceptional customer service. 
            We value sustainability and strive to make a positive impact on the environment by promoting eco-friendly cycles and products.
          </p>
        </section>

       
        <section className="container p-0 text-center py-5">
  <img
    src="https://img.freepik.com/premium-vector/bicycle-bike-store-vector-illustration-cartoon-flat-buyers-shoppers-people-choosing-cycles-accessories-equipment-bike-shop_169479-1402.jpg?size=626&ext=jpg&ga=GA1.1.433475013.1689069475&semt=ais_hybrid"
    alt="Cyclists enjoying a ride"
    className="img-fluid w-100 rounded shadow-lg"
    style={{ maxHeight: "500px", objectFit: "cover" }}
  />
</section>

      </main>
      <Footer />
    </>
  );
};

export default About;
