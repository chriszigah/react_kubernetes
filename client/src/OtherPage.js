import React from "react";
import { Link } from 'react-router-dom'

const OtherPage = () => {
  return (
    <>
      <div>I am some other page !</div>
      <Link to="/">Go back HOME</Link>
    </>
  );
};

export default OtherPage;
