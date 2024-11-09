import React from "react";

const Login = () => {
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
        <h1 className="text-center mb-4">Welcome to CYCLE WALA!</h1>
        <p className="text-center mb-4">
          Your one-stop shop for all things cycling. Please log in to continue.
        </p>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
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
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100" disabled>
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <button href="#" className="text-success" disabled>
            Forgot Password?
          </button>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <a href="/" className="btn btn-secondary me-2">
            Back to Main Page
          </a>
          <span className="mx-2">OR</span>
          <a href="/" className="btn btn-outline-success ms-2">
            Continue as Guest
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
