import React from "react";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <div className="text-danger mt-5">
        <h3>This page could not be found</h3>
      </div>
      <img src="https://i.imgur.com/qIufhof.png" className="w-25" alt="img"/>
    </div>
  );
};

export default ErrorPage;
