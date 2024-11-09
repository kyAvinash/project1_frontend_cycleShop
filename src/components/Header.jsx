import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [favCount, setFavCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchFavoriteCount = () => {
    fetch(
      "https://project1backend-navy.vercel.app/products/favorite/isFavorite"
    )
      .then((response) => response.json())
      .then((data) => {
        setFavCount(data?.length || 0); // Assuming data is an array
      })
      .catch((error) => console.log("Error fetching favorite count:", error));
  };

  const fetchCartCount = () => {
    fetch("https://project1backend-navy.vercel.app/cart")
      .then((response) => response.json())
      .then((data) => {
        setCartCount(data?.length || 0); // Assuming data is an array
      })
      .catch((error) => console.log("Error fetching cart count:", error));
  };

  const initializeDataFetching = () => {
    if (!isLoaded) {
      fetchFavoriteCount();
      fetchCartCount();
      setIsLoaded(true);
    }
  };

  initializeDataFetching();

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Logo Section */}
          <div className="navbar-brand d-flex align-items-center">
            <NavLink
              to="/"
              className="text-white d-flex align-items-center"
              style={{ textDecoration: "none" }}
            >
              <span style={{ fontSize: "30px", marginRight: "10px" }}>
                &#128690;
              </span>
              Cycle Wala
            </NavLink>
          </div>

          {/* Navbar Links Section */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/faq">
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/blogs">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* User Action Links Section */}
          <div className="d-flex align-items-center">
            <NavLink to="/login" className="nav-item nav-link text-white ms-3">
              &#128100; Login
            </NavLink>
            <div className="position-relative ms-3">
              <NavLink to="/favorite" className="nav-item nav-link text-white">
                &#10084; Favorite
              </NavLink>
              {favCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {favCount}
                </span>
              )}
            </div>
            <div className="position-relative ms-3">
              <NavLink to="/cart" className="nav-item nav-link text-white">
                &#128722; Cart
              </NavLink>
              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {cartCount}
                </span>
              )}
            </div>
          </div>

          {/* Navbar Toggle Button for mobile view */}
          <button
            className="navbar-toggler btn border-light bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
