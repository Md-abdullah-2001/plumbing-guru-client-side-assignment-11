import React, { useEffect, useState } from "react";
import HomeServiceCard from "../Home/HomeServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://y-snowy-ten.vercel.app/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-12">
      <div className=" text-center">
        <h1 className="text-blue-500 font-bold  text-3xl">My Services</h1>
        <p className="font-semibold">
          Here are few of services that I provide on Plumbing Niece.
          {services.length}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-12">
        {services.map((service) => (
          <HomeServiceCard
            service={service}
            key={service._id}
          ></HomeServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
