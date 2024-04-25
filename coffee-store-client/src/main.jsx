import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () =>
      fetch(
        "https://coffee-store-server-e1w5f0p2i-ashikur-rahmans-projects-d97591ea.vercel.app/coffee"
      ),
  },
  {
    path: "/add-coffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/update-coffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-e1w5f0p2i-ashikur-rahmans-projects-d97591ea.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>,
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-e1w5f0p2i-ashikur-rahmans-projects-d97591ea.vercel.app/user"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
