import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "./userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and registration
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // For registration
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status, error } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ email, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        navigate("/"); // Navigate to home on successful login
      }
    } catch (err) {
      console.error("Login failed: ", err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(registerUser({ name, email, password }));
      if (registerUser.fulfilled.match(resultAction)) {
        setIsRegister(false); // Switch to login form after successful registration
      }
    } catch (err) {
      console.error("Registration failed: ", err);
    }
  };

  return (
    <main
      className="container-fluid min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521078803125-7efd09b65b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZSUyMHNob3B8ZW58MHx8MHx8fDA%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card p-5 shadow-lg"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h1 className="text-center mb-4">
          {isRegister ? "Register for CYCLE WALA!" : "Welcome to CYCLE WALA!"}
        </h1>
        <p className="text-center mb-4">
          {isRegister
            ? "Create an account to start your cycling journey."
            : "Log in to continue."}
        </p>
        {status === "failed" && (
          <div className="alert alert-danger text-center">{error}</div>
        )}
        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          {isRegister && (
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? "Processing..."
              : isRegister
              ? "Register"
              : "Login"}
          </button>
        </form>
        <div className="text-center mt-3">
          <button
            type="button"
            className="btn btn-link text-success"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Already have an account? Log in" : "Create an account"}
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <a href="/" className="btn btn-outline-success">
            Continue as Guest
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
