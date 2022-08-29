import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
     <Link to="/Login">Please Login before continuing</Link>
    </div>
  );
};

export default Home;
