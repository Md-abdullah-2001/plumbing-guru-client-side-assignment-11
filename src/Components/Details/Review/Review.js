import React from "react";

const Review = () => {
  const handleLogin = () => {};
  return (
    <div className="relative">
      <div className="fixed  right-0 bottom-16 z-30  w-96  shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
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
            <input
              className="btn btn-primary text-black"
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Review;
