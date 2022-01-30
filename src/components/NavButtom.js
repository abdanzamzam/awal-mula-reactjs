import React from "react";
import { Link } from "react-router-dom";

function NavButtom() {
  return (
    <nav className="fixed h-14 bottom-0 z-10 bg-white md:w-96 lg:w-96 xl:w-96 shadow-2xl border-t-2 border-green-900">
      <div className="flex justify-around h-full items-center">
        <div className="text-center">
          <Link to="/">
            <i className="fas fa-home text-green-800"></i>
            <p className="text-xs text-green-800">Home</p>
          </Link>
        </div>
        <div className="text-center">
          <Link to="/shopping">
            <i className="fas fa-store text-green-800"></i>
            <p className="text-xs text-green-800">Shopping</p>
          </Link>
        </div>
        <div className="text-center">
          <i className="fas fa-utensils text-green-800"></i>
          <p className="text-xs text-green-800">Recipe</p>
        </div>
        <div className="text-center">
          <i className="fas fa-newspaper text-green-800"></i>
          <p className="text-xs text-green-800">Articles</p>
        </div>
        <div className="text-center">
          <i className="fas fa-user text-green-800"></i>
          <p className="text-xs text-green-800">Account</p>
        </div>
      </div>
    </nav>
  );
}

export default NavButtom;
