import React from "react";

function NavShoppingTop() {
  return (
    <>
      <nav className="bg-white p-2 mt-0 fixed md:w-96 lg:w-96 xl:w-96 z-10 top-0 shadow-md h-16">
        <div className="flex justify-between  h-full items-center">
          <div className="flex h-10 justify-between items-center mr-1 bg-gray-100 rounded-lg ml-2 w-full">
            <input
              type="text"
              className="w-2/3 h-7 rounded-xl mr-2 bg-gray-100 text-xs mx-3 font-sans focus:ring-sky-500"
              placeholder="Search Item ..."
            />
            <i className="fas fa-search text-sm text-gray-300 pt-1 mr-2"></i>
          </div>
          <div>
            <i className="fas fa-shopping-basket text-xl ml-5 mr-2 text-green-700"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavShoppingTop;
