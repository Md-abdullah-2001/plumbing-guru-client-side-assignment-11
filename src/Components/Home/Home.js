import React from "react";
import ContactNanner from "../ContactNanner/ContactBanner.js";
import Hero from "../Hero/Hero";
import HomeServices from "./HomeServices";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <HomeServices></HomeServices>
      <ContactNanner></ContactNanner>
    </div>
  );
};

export default Home;
