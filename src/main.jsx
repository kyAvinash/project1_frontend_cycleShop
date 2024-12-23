import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./App/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import App from "./App";
import Shop from "./pages/Shop";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Login from "./features/users/Login"
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";
import { Provider } from "react-redux";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/shop",
		element: <Shop />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/faq",
		element: <FAQ />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/blogs",
		element: <Blogs />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/cart",
		element: <Cart />,
	},
	{
		path: "/favorite",
		element: <Favorite />,
	},
	{
		path: "/searchResults/:query",
		element: <SearchResults/>,
	},
	{
		path: "/product-details/:id",
		element: <ProductDetails />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
		<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
