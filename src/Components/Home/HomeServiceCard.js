import React from "react";
import { Link } from "react-router-dom";

const HomeServiceCard = ({ service }) => {
  const { title, description, price, _id } = service;
  console.log(_id);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={service.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <p>
          {description.length > 100
            ? description.slice(0, 100) + "..."
            : description}{" "}
        </p>
        <div className="card-actions justify-between">
          <h3 className="font-semibold">${price}</h3>
          <Link to={`details/${_id}`}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeServiceCard;
