import { NavLink } from "react-router-dom";
import { useState } from "react";

const GenerateProductCard = ({ data, loading, error }) => {
  const [quantities, setQuantities] = useState({});
  const [successMessage, setSuccessMessage] = useState(null);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const response = await fetch(
        "https://project1-backend-six.vercel.app/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId, quantity }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      const cartItem = await response.json();
      setSuccessMessage("Added to cart successfully!");

      //hide the message after a few seconds
      setTimeout(() => setSuccessMessage(null), 3000); // Hide after 3 seconds
    } catch (error) {
      //console.error('Error adding to cart:', error.message);
    }
  };

  const handleUpdateFavorite = async (productId, isFav) => {
    try {
      const response = await fetch(
        `https://project1-backend-six.vercel.app/products/favorite/isFavorite/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ favorite: !isFav }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update favorite status.");
      }

      window.location.reload(); // Reload the page
    } catch (error) {
      console.error("Error updating favorite: ", error);
    }
  };

  const handleQuantityChange = (productId, e) => {
    setQuantities((prev) => ({ ...prev, [productId]: e.target.value }));
  };

  if (loading) {
    return (
      <div className="alert alert-info text-center" role="alert">
        {loading}
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        Error: {error.message || "An unexpected error occurred."}
      </div>
    );
  }

  return (
    <>
      {successMessage && (
        <div className="alert alert-success mb-0 ms-2" role="alert">
          {successMessage}
        </div>
      )}
      {data?.length > 0 ? (
        data.map((product) => (
          <div key={product._id} className="col-lg-4 col-md-6 col-sm-12 mt-3">
            <div className="card mb-3 position-relative">
              <NavLink
                to={`/product-details/${product._id}`}
                className="nav-link"
              >
                <img
                  src={product.imageUrls[0]}
                  className="card-img-top img-fluid"
                  alt={product.name}
                  style={{ height: "250px", width: "100%", objectFit: "cover" }}
                />
              </NavLink>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <NavLink
                    to={`/product-details/${product._id}`}
                    className="nav-link"
                  >
                    <h5 className="card-title">{product.name}</h5>
                  </NavLink>
                  <p className="card-text fw-bold">₹{product.price}</p>
                </div>
                <p className="card-text">Brand: {product.brand}</p>
                <p className="card-text">Model: {product.model}</p>
                <p className="card-text">Type: {product.type}</p>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <div>
                    <label>Qty: </label>
                    <input
                      type="number"
                      min="1"
                      value={quantities[product._id] || 1} //{quantity}
                      onChange={(e) => handleQuantityChange(product._id, e)}
                      className="form-control"
                      style={{ width: "70px", display: "inline-block" }}
                    />
                  </div>
                  <div className="rating">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    className={`btn ${
                      product.favorite ? "btn-dark" : "btn-outline-danger"
                    }`}
                    onClick={() =>
                      handleUpdateFavorite(product._id, product.favorite)
                    }
                  >
                    {product.favorite ? "❤️ Favorite" : "❤ Favorite"}
                  </button>

                  <button
                    className="btn btn-outline-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(
                        product._id,
                        quantities[product._id] || 1
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="alert alert-warning text-center" role="alert">
          No products available.
        </div>
      )}
    </>
  );
};

export default GenerateProductCard;
