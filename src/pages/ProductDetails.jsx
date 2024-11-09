import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../useFetch";
import { useState } from "react";
import RenderProductsByType from "../components/RenderProductsByType";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://project1backend-navy.vercel.app/products/${id}`
  );
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState(null);

  const product = data || {};
  const {
    imageUrls = [],
    name,
    brand,
    model,
    price,
    description,
    availableInStock,
    stockQuantity,
    reviews = [],
    type,
    categories = [],
    tags = [],
    color,
    size,
    dimensions = {}, // Default to an empty object
    weight,
    warranty,
    warrantyDuration,
    shipping,
    shippingCost,
    shippingDuration,
  } = product;

  const handleAddToCart = async () => {
    try {
      const response = await fetch(
        "https://project1backend-navy.vercel.app/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: id, quantity }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }

      setSuccessMessage("Added to cart successfully!");
      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      console.error("Error adding to cart:", error.message);
    }
  };

  return (
    <>
      <Header />
      <main className="container my-5">
        {loading ? (
          <div className="text-center my-5">
            <div className="alert alert-info">Loading product details...</div>
          </div>
        ) : error ? (
          <div className="text-center my-5">
            <div className="alert alert-danger">
              Error loading product details. Please try again later.
            </div>
          </div>
        ) : (
          <div className="row">
            {/* Product Image Section */}
            <div className="col-md-6">
              <div className="big-image mb-3">
                <img
                  src={imageUrls[selectedImage]}
                  alt={name}
                  className="img-fluid rounded shadow-sm"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="small-images d-flex flex-wrap justify-content-start">
                {imageUrls?.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Thumbnail ${index}`}
                    className={`img-thumbnail mx-1 ${
                      selectedImage === index ? "border-primary" : ""
                    }`}
                    style={{ cursor: "pointer", width: "80px", height: "60px" }}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="col-md-6">
              <div className="card border-light shadow-sm p-4">
                <h2 className="fw-bold mb-3">{name}</h2>
                <p>
                  <strong>Brand:</strong> {brand}
                </p>
                <p>
                  <strong>Model:</strong> {model}
                </p>
                <p>
                  <strong>Price:</strong>{" "}
                  <span className="text-success fw-bold">${price}</span>
                </p>
                <p>
                  <strong>Description:</strong> {description}
                </p>
                <p>
                  <strong>Color:</strong> {color}
                </p>
                <p>
                  <strong>Size:</strong> {size}
                </p>
                <p>
                  <strong>Weight:</strong> {weight} kg
                </p>
                <p>
                  <strong>Dimensions:</strong>{" "}
                  {`${dimensions?.length || 0} x ${dimensions?.width || 0} x ${
                    dimensions?.height || 0
                  } cm`}
                </p>
                <p>
                  <strong>Categories:</strong> {categories.join(", ")}
                </p>
                <p>
                  <strong>Tags:</strong> {tags.join(", ")}
                </p>
                <p>
                  <strong>Available in Stock:</strong>
                  <span
                    className={`ms-2 ${
                      availableInStock ? "text-success" : "text-danger"
                    }`}
                  >
                    {availableInStock ? "Yes" : "No"}
                  </span>
                </p>
                {availableInStock && (
                  <p>
                    <strong>Stock Quantity:</strong> {stockQuantity}
                  </p>
                )}

                <div className="mt-3">
                  <label htmlFor="quantity" className="form-label">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    className="form-control"
                    min="1"
                    max={stockQuantity}
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    style={{ width: "100px" }}
                  />
                </div>

                <button
                  className="btn btn-primary mt-3"
                  onClick={handleAddToCart}
                  disabled={!availableInStock}
                >
                  Add to Cart
                </button>
                {successMessage && (
                  <div className="alert alert-success mt-3" role="alert">
                    {successMessage}
                  </div>
                )}

                {warranty && (
                  <p className="mt-3">
                    <strong>Warranty:</strong> {warrantyDuration} months
                  </p>
                )}

                {shipping && (
                  <p>
                    <strong>Shipping Cost:</strong> ${shippingCost} (Estimated
                    delivery in {shippingDuration} days)
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {!loading && !error && (
          <>
            <hr className="my-5" />
            <h3>{type} Similar Products</h3>
            <div className="row">
              <RenderProductsByType productType={type} />
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProductDetails;
