import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { FaGoogle } from "react-icons/fa";

const provider = new GoogleAuthProvider();
const Login = () => {
  const { logIn, googleProvider } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const signInSubmitGoogle = () => {
    googleProvider(provider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="hero p-5 w-full my-5">
      <div className="hero-content ">
        <div className="card  w-96  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary text-black"
                type="submit"
                value="Login"
              />
              <p className="pl-5 pt-4  font-semibold">
                Don't have an Account?{" "}
                <Link className=" text-green-400" to="/signup">
                  SignUp
                </Link>
              </p>
            </div>

            <button
              onClick={signInSubmitGoogle}
              className="btn btn-outline btn-info"
            >
              {" "}
              <span className="flex items-center   gap-2">
                {" "}
                <FaGoogle></FaGoogle> Sign in with Google
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
