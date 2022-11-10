import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details/Details";
import MyReview from "../Components/Details/Review/MyReview";
import Home from "../Components/Home/Home";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Services from "../Components/Services/Services";
import Main from "../Main/Main";
import Login from "../Shared/Auth/Login/Login";
import SignUp from "../Shared/Auth/SignUp/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/details/:id",

        loader: ({ params }) =>
          fetch(`https://y-snowy-ten.vercel.app/${params.id}`),
        element: <Details></Details>,
      },
      {
        path: "/services/details/:id",
        loader: ({ params }) =>
          fetch(`https://y-snowy-ten.vercel.app/services/${params.id}`),
        element: <Details></Details>,
      },
      { path: "/services", element: <Services></Services> },
      { path: "/login", element: <Login></Login> },
      { path: "/signup", element: <SignUp></SignUp> },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
