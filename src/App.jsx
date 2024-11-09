import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBox from "./components/SearchBox";
import RenderOurProductsCatlog from "./components/RenderOurProductsCatlog";
import Filter from "./components/Filter";
import { Link } from "react-router-dom";
import Login from "./pages/Login";

export default function App() {
  // authentication check

  /*
  const isAuthenticated = false;
  
  if (!isAuthenticated) {
    return <Login />;
  }
*/

  const [filter, setFilter] = useState({
    brands: [],
    models: [],
    years: [],
    price: 0,
  });

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <Header />
      <main>
        <div
          className="hero-section d-flex align-items-center min-vh-100"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/1409969549/photo/young-woman-on-a-night-e-bike-ride.jpg?s=612x612&w=0&k=20&c=90FPvWgUcyMYp1s9NMTrieYTAlYI5MjkvzNxfjr7B5o=")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container text-center text-light">
            <h1 className="display-3 fw-bold mb-4 text-warning">
              LARGER NETWORK FOR BETTER CHOICE
            </h1>
            <p className="mb-5">
              With a Manufacturing Unit, Franchises, Outlets, and Main Branches
              spread in Uttar Pradesh, Gomtinagar, Nirala Nagar, Bangalore, and
              MG Road
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6 mb-4">
                <h1 className="fw-bold text-warning">CYCLE WALA</h1>
                <p>
                  The Largest Cycle Shop in Uttar Pradesh, Dealing with the Best
                  Quality Bicycle. Eco-Friendly, Comfortable to Ride, and
                  Reliable for Adventure.
                </p>
                <h2 className="fw-bold text-warning">
                  THE HEALTHIER LIFESTYLE
                </h2>
                <p>
                  'Cycle Wala' provides you with the Best value for your
                  purchase of any Bicycle. Enjoy your ride towards a Healthy
                  Life with Us!
                </p>
                <Link to="/shop" className="btn btn-success btn-lg">
                  SHOP NOW
                </Link>
              </div>
              <div className="col-md-6">
                <SearchBox />
              </div>
            </div>
          </div>
        </div>

        <section className="container-fluid py-5 bg-secondary">
          <div className="row">
            <div className="col-md-2">
              <Filter onFilterChange={handleFilterChange} />
            </div>
            <div className="col-md-10">
              <RenderOurProductsCatlog filter={filter} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
