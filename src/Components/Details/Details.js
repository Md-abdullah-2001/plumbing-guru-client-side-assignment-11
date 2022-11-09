import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Review from "./Review/Review";

const Details = () => {
  const service = useLoaderData();
  console.log(service);
  const { img, title, description, price } = service;
  console.log(img, title, description, price);
  return (
    <div>
      <div className="container ml-12 card w-96 bg-base-100 shadow-xl">
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
      <Review></Review>
    </div>
  );
};

export default Details;
