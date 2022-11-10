import React from "react";

const ShowReviews = ({ review }) => {
  console.log(review);
  return (
    <div className="">
      <div className=" relative ">
        <div className="sticky-[90vh] top-8 p-5 w-72 h-24 bg-black  shadow-xl">
          <div className="flex gap-2 items-center">
            {" "}
            <img
              className="w-12 h-12 rounded-full"
              src={review.userImg}
              alt=""
              srcSet=""
            />
            <h4 className="text-white">{review.userName}</h4>
          </div>
          <p className="text-white">{review.reviewText}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
