import React, { useEffect, useState } from "react";

const ShowReviews = ({ service }) => {
  const [reviews, setReviews] = useState([]);
  // console.log(service._id);
  useEffect(() => {
    fetch(`https://y-snowy-ten.vercel.app/reviews?id=${service._id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, [service._id]);
  console.log(reviews);

  return (
    <div className="mb-96 w-full grid grid-cols-2 gap-4  relative ">
      {reviews.map((review) => (
        <div
          key={review._id}
          className="sticky-[90vh] top-8 p-5 w-72 h-24 bg-black  shadow-xl"
        >
          <div className="flex gap-2 items-center">
            {" "}
            <img
              className="w-12 h-12 rounded-full"
              src={review.userImg}
              alt=""
              srcset=""
            />
            <h4 className="text-white">{review.userName}</h4>
          </div>
          <p className="text-white">{review.reviewText}</p>
        </div>
      ))}
    </div>
  );
};

export default ShowReviews;
