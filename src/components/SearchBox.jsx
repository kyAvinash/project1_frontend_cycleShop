import { useState } from "react";
import { NavLink } from "react-router-dom";
import useFetch from "../useFetch";

const SearchBox = () => {
  const { data, loading, error } = useFetch(
    "https://project1-backend-six.vercel.app/products"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <div className="card border-info shadow-lg p-4 mb-5 rounded-5">
      <div className="card-body">
        <h2 className="card-title fw-bold">Search for your perfect cycle</h2>
        <p className="lead card-subtitle mb-4 text-body-secondary">
          The largest bicycle marketplace in India
        </p>

        {loading && (
          <div className="alert alert-info" role="alert">
            Loading search bar, please wait...
          </div>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            Error loading data. Please try again later.
          </div>
        )}

        {!loading && !error && (
          <form>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by brand, model, year, or price"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  required
                />
              </div>
              <div className="col-6">
                <NavLink
                  to={`/searchResults/${searchTerm}`}
                  className="btn btn-success rounded-5 w-100"
                  onClick={(e) => {
                    if (!searchTerm.trim()) {
                      e.preventDefault(); // Prevent navigation if the search term is empty
                    }
                  }}
                >
                  Search
                </NavLink>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-danger rounded-5 w-100"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
