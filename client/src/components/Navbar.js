import React from "react";
import { Link } from "@reach/router";

const Navbar = () => {
  return (
    <nav>
      <h1 className="display-4">Favorite Authors</h1>
      <Link to="/authors" role="button" className="btn btn-primary text-white">
        Home
      </Link>
      <Link
        to="/authors/new"
        role="button"
        className=" text-white btn btn-secondary"
      >
        Add Author
      </Link>
    </nav>
  );
};

export default Navbar;
