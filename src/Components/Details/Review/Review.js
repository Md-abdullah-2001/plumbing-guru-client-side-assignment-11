import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Shared/Auth/AuthProvider";
import ShowReviews from "./ShowReviews";

const Review = ({ service }) => {
  console.log(service);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const submitPost = (event) => {
    event.preventDefault();
    const form = event.target;
    const reviewText = form.review.value;
    const userName = user.displayName;
    const userImg = user.photoURL;
    const id = service._id;
    const email = user.email;
    form.reset();
    const fullReview = { userName, userImg, id, reviewText, email };
    console.log(fullReview);
    fetch(`http://localhost:5000/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="w-full flex justify-evenly mb-48">
      <div>
        <div className="relative">
          <div className="container mx-auto ">
            <ShowReviews service={service} key={service._id}></ShowReviews>
          </div>
          <div className="fixed  right-0 bottom-0 z-30 w-48 lg:w-96  shadow-2xl bg-base-100">
            <form onSubmit={submitPost} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Write your review</span>
                </label>

                <textarea
                  className="textarea textarea-success"
                  placeholder="Start typing..."
                  id="review"
                  name="review"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                {user?.uid ? (
                  <input
                    className="btn btn-primary text-black"
                    type="submit"
                    value="Post"
                  />
                ) : (
                  <Link to="/login" className="btn btn-primary text-black">
                    Post
                  </Link>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
