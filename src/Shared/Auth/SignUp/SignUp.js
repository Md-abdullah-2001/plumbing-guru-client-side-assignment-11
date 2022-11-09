import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../AuthProvider";

const SignUp = () => {
  const { createUserWithPassword, setUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    createUserWithPassword(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        updateProfile(name, photo);
        navigate("/");
        form.reset();
      })
      .catch((error) => console.error(error));

    const updateProfile = (name, photo) => {
      const profile = { displayName: name, photoURL: photo };
      setUserData(profile)
        .then(() => {})
        .catch((e) => console.log(e));
    };
  };

  return (
    <div className="hero p-5 w-full my-5">
      <div className="hero-content ">
        <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-5xl font-bold">SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
              />
            </div>
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
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photo"
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
                value="Sign-Up"
              />
              <p className="pl-5 pt-4 font-semibold  ">
                Already have an Account?{" "}
                <Link className="text-green-400" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
