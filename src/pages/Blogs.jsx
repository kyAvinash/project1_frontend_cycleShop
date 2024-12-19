import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPostCard from "../components/BlogPostCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    imageUrl: "",
    author: "",
  });
  const [alertMessage, setAlertMessage] = useState(null);

  // Fetch blogs from the API
  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://project1-backend-six.vercel.app/blogs"
      );
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      setAlertMessage({
        type: "danger",
        message: "Error fetching blogs. Please try again later.",
      });
    }
  };

  fetchBlogs();

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  // Handle blog post submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://project1-backend-six.vercel.app/blogs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newBlog),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setAlertMessage({
          type: "success",
          message: "Blog posted successfully!",
        });

        setBlogs([...blogs, data]);
        setNewBlog({ title: "", content: "", imageUrl: "", author: "" });
        setShowForm(false);
      } else {
        setAlertMessage({
          type: "danger",
          message: data.error || "Error posting blog.",
        });
      }
    } catch (error) {
      setAlertMessage({
        type: "danger",
        message: "Error posting blog. Please try again later.",
      });
    }
  };

  return (
    <>
      <Header />
      <main>
        <section
          className="container-fluid p-0 d-flex justify-content-center align-items-center min-vh-50 text-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1
            className="text-danger fw-bold display-2"
            style={{ padding: "150px 0" }}
          >
            Blogs
          </h1>
        </section>

        <section className="container py-5">
          <h2 className="display-5 fw-bold text-center">Blogs</h2>
          <div className="row mt-5">
            {blogs.map((blog, index) => (
              <BlogPostCard
                key={index}
                title={blog.title}
                content={blog.content}
                imageUrl={blog.imageUrl}
                author={blog.author}
              />
            ))}
          </div>

          <div className="text-center my-4">
            <button
              className="btn btn-primary"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Hide Form" : "Post Your Blog"}
            </button>

            <div className="py-3">
              {alertMessage && (
                <div
                  className={`alert alert-${alertMessage.type}`}
                  role="alert"
                >
                  {alertMessage.message}
                </div>
              )}
            </div>
          </div>

          {showForm && (
            <div className="card p-4">
              <h2 className="card-title">Post a New Blog</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={newBlog.title}
                    onChange={handleChange}
                    placeholder="Blog Title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="author"
                    name="author"
                    value={newBlog.author}
                    onChange={handleChange}
                    placeholder="Author's Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    className="form-control"
                    id="content"
                    name="content"
                    rows="5"
                    value={newBlog.content}
                    onChange={handleChange}
                    placeholder="Blog Content"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    id="imageUrl"
                    name="imageUrl"
                    value={newBlog.imageUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit Blog
                </button>
              </form>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blogs;
