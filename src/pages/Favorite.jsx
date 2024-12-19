import React, { useState } from "react";
import useFetch from "../useFetch";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GenerateProductCard from "../components/GenerateProductCard";

const Favorite = () => {
  const { data, loading, error } = useFetch(
    "https://project1-backend-six.vercel.app/products/favorite/isFavorite"
  );

  return (
    <>
      <Header />
      <main>
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2020/12/19/20/55/cycling-5845317_1280.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-danger fw-bold display-2"
            style={{ padding: "150px 0" }}
          >
            Favorites
          </h1>
        </section>

        <section className="container py-5">
          <h3 className="display-5 fw-bold text-center">Your Favorite List!</h3>
          <div className="my-5">
            {data && (
              <div className="row">
                <GenerateProductCard
                  data={data}
                  error={error}
                  loading={loading}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Favorite;
