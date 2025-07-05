import { createRoot } from "react-dom/client";
import UserHeader from "./components/UserHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import Contact from "./pages/Contact";
import MovieDetails from "./pages/MovieDetails";
import AddMovie from "./pages/AddMovie";
import UserRoot from "./Layouts/UserRoot";
import AdminRoot from "./Layouts/AdminRoot";
import Rating from "./pages/Rating";
import store from './app/store'
import { Provider } from 'react-redux'
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([

  {
    path: "/",
    element: <UserRoot/>,
    children:[
  {path: "",
    element: <HomePage/>,
  },
  {
    path: "login",
    element: <Login/>
  },
    {
    path: "register",
    element: <Register/>
  },
  {
    path: "movie/:id",
    element: <MovieDetails/>
  },
  {
    path: "rating",
    element: <Rating/>
  },
    ]
  },
  
  
    {
    path: "/admin",
    element: <AdminRoot/>,
    children:[
      {
         path: "add-movie",
    element: <AddMovie/>
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <StrictMode>
      <Provider  store={store}>
      <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  </>
);
