import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedQuantities, setUpdatedQuantities] = useState({});

  // Fetch cart items on initial render
  const fetchCartItems = async () => {
    try {
      const response = await fetch('https://project1-backend-six.vercel.app/cart');
      const data = await response.json();
      if (response.ok) {
        setCartItems(data);
      } else {
        setError(data.message || "Failed to fetch cart items");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart items immediately on load
  fetchCartItems();

  const handleQuantityChange = (cartItemId, quantity) => {
    setUpdatedQuantities((prev) => ({
      ...prev,
      [cartItemId]: quantity,
    }));
  };

  const handleUpdateQuantity = async (cartItemId) => {
    const quantity = updatedQuantities[cartItemId];
    if (quantity) {
      try {
        const response = await fetch(`https://project1-backend-six.vercel.app/cart/${cartItemId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ quantity }),
        });
        if (response.ok) {
          const updatedItem = await response.json();
          setCartItems(cartItems.map(item => item._id === updatedItem._id ? updatedItem : item));
        } else {
          setError("Failed to update item quantity");
        }
      } catch (error) {
        setError("Failed to update item quantity");
      }
    }
  };

  const handleRemove = async (cartItemId) => {
    try {
      const response = await fetch(`https://project1-backend-six.vercel.app/cart/${cartItemId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setCartItems(cartItems.filter(item => item._id !== cartItemId));
      }
    } catch (error) {
      setError("Failed to remove item from cart");
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await fetch('https://project1-backend-six.vercel.app/cart', {
        method: 'DELETE'
      });
      if (response.ok) {
        setCartItems([]);
      } else {
        const data = await response.json();
        setError(data.message || "Failed to clear cart");
      }
    } catch (error) {
      setError("Failed to clear cart");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.productId.price * item.quantity, 0);

  return (
    <>
      <Header />
      <main className="container my-5">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title mb-4 text-center">Shopping Cart</h1>

            {loading ? (
              <div className="alert alert-info text-center">Loading...</div>
            ) : error ? (
              <div className="alert alert-danger text-center">{error}</div>
            ) : cartItems.length === 0 ? (
              <div className="alert alert-warning text-center">Your cart is empty</div>
            ) : (
              <div className="table-responsive">
                <button
                  type="button"
                  className="btn btn-danger btn-block mt-2 mb-3"
                  onClick={handleDeleteAll}
                >
                  Delete All
                </button>
                <table className="table table-bordered text-center align-middle">
                  <thead className="thead-light">
                    <tr>
                      <th>Remove</th>
                      <th>Product</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                      <th>Update</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item._id}>
                        <td>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemove(item._id)}
                          >
                            Remove
                          </button>
                        </td>
                        <td>
                          {item.productId.imageUrls && item.productId.imageUrls.length > 0 ? (
                            <img
                              src={item.productId.imageUrls[0]}
                              alt={item.productId.name}
                              className="img-thumbnail"
                              width="60"
                              height="60"
                            />
                          ) : (
                            <span>No Image Available</span>
                          )}
                        </td>
                        <td>{item.productId.name}</td>
                        <td>${item.productId.price}</td>
                        <td>
                          <input
                            type="number"
                            value={updatedQuantities[item._id] !== undefined ? updatedQuantities[item._id] : item.quantity}
                            min="1"
                            className="form-control form-control-sm"
                            style={{ maxWidth: '70px', margin: '0 auto' }}
                            onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                          />
                        </td>
                        <td>${(item.productId.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-primary btn-sm"
                            onClick={() => handleUpdateQuantity(item._id)}
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {cartItems.length > 0 && (
              <div className="row justify-content-end">
                <div className="col-md-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Cart Totals</h4>
                      <table className="table">
                        <tbody>
                          <tr>
                            <th>Subtotal</th>
                            <td>
                              ${subtotal < 10 ? subtotal.toFixed(2) : subtotal.toFixed(2)}
                            </td>
                          </tr>
                          <tr>
                            <th>Total</th>
                            <td><strong>${subtotal < 10 ? subtotal.toFixed(2) : subtotal.toFixed(2)}</strong></td>
                          </tr>
                        </tbody>
                      </table>
                      <button type="button" className="btn btn-success btn-block" onClick={() => alert("Order Placed Successfully!")}>
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
