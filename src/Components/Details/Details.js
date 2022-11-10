import React from "react";
import { useLoaderData } from "react-router-dom";

import Review from "./Review/Review";

const Details = () => {
  const service = useLoaderData();
  console.log(service);
  const { img, title, description, price } = service;

  return (
    <div className="grid cap-8 lg:grid-cols-2">
      <div className="container ml-12 card w-3/6 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <p>{description}</p>
          <div className="card-actions justify-between">
            <h3 className="font-semibold">${price}</h3>
          </div>
        </div>
      </div>
      <div className="w-5/6 mr-72" relative>
        <Review service={service} key={service._id}></Review>
      </div>
    </div>
  );
};

export default Details;
