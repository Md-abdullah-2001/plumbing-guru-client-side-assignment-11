import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen mx-auto container"
      style={{
        backgroundImage: `url(https://i.ibb.co/3rfYW16/istockphoto-155432914-170667a.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="max-w-4xl mt-12">
          <h1 className="mb-5  text-5xl font-bold">
            {" "}
            Decades of Experience <br />
            Reparing Plumb For People.
          </h1>
          <p className="mb-5">
            I have been working as a plumber for last 2 decades . Helped
            thousands of client getting their work done with long lasting
            guarranty.Speciality of my service is using quality machinaries that
            makes work satisfying.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
