import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import RenderOurProductsCatlog from "../components/RenderOurProductsCatlog";
import PaymentOptionCard from "../components/PaymentOptionCard";
import Filter from "../components/Filter";

const Shop = () => {
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
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/after-going-tournaments-around-world-cyclists-bring-their-bikes-back-maintenance-workshop-repairs-flat-vector-illustration-design_1150-56747.jpg?size=626&ext=jpg&ga=GA1.1.1919385283.1724278859&semt=ais_hybrid')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-danger fw-bold display-2"
            style={{ padding: "150px 0" }}
          >
            Shop
          </h1>
        </section>

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

        <section className="container mt-3">
          <PaymentOptionCard />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
