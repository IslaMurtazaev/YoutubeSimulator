import React from "react";
import spinner from "../assets/img/loading.gif";

const Spinner = () => {
  return (
    <div className="col-md-8">
      <img className="col-md-10 mx-auto d-block" src={spinner} alt="loading" />
    </div>
  );
};

export default Spinner;
