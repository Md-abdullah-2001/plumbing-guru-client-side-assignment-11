import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home";
import Services from "../Components/Services/Services";
import Main from "../Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <Details></Details>,
      },
      {
        path: "/services/details/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
        element: <Details></Details>,
      },
      { path: "/services", element: <Services></Services> },
    ],
  },
]);

export default router;
