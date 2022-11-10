import React from "react";
import { FaConfluence, FaFoursquare, FaMizuni } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="bg-red-400 container mx-auto mb-12 p-12">
      <h1 className="text-white text-center mb-12  text-4xl">Features</h1>
      <div className=" lg:flex justify-between ">
        <div className="text-3xl font-semibold">
          <FaFoursquare className="text-center text-5xl mx-auto"></FaFoursquare>
          <h1>Fast and Smooth </h1>
        </div>
        <div className="text-3xl font-semibold">
          <FaMizuni className="text-center text-5xl mx-auto"></FaMizuni>
          <h1>Parmanent Solution</h1>
        </div>
        <div className="text-3xl font-semibold">
          <FaConfluence className="text-center text-5xl mx-auto"></FaConfluence>
          <h1>Well-Experienced</h1>
        </div>
      </div>
    </div>
  );
};

export default Feature;
