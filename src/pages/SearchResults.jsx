import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useFetch from "../useFetch";
import GenerateProductCard from "../components/GenerateProductCard";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { query } = useParams();
  const { data, loading, error } = useFetch(
    "https://project1-backend-six.vercel.app/products"
  );

  const filterProducts = () => {
    if (!data) return [];
    return data?.filter((product) => {
      const searchTerm = query.toLowerCase();
      return (
        product.brand.toLowerCase().includes(searchTerm) ||
        product.model.toLowerCase().includes(searchTerm) ||
        product.year.toString().includes(searchTerm) ||
        product.price.toString().includes(searchTerm)
      );
    });
  };

  const filteredProducts = filterProducts();

  return (
    <>
      <Header />
      <main className="py-4 container">
        <h1 className="text-center">Your Search Results...</h1>
        <div className="row">
          {(loading || error || filteredProducts.length === 0) && (
            <div className="alert alert-info w-100">
              {loading && <span>Loading products...</span>}
              {error && (
                <span className="text-danger">
                  Error loading products. Please try again later.
                </span>
              )}
              {!loading && !error && filteredProducts.length === 0 && (
                <span>No products found for your search.</span>
              )}
            </div>
          )}

          {filteredProducts.length > 0 && (
            <div className="row">
              <GenerateProductCard data={filteredProducts} />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SearchResults;
