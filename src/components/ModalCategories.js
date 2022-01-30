import React from "react";

function ModalCategories({ showCategories, categories, getByCategory }) {
  console.log(categories);
  return (
    <nav className="fixed md:w-96 lg:w-96 xl:w-96 z-30 top-0 h-screen">
      <div className="flex justify-center items-center opacity-100">
        <div className="relative top-20 mx-10 p-5 w-96 shadow-lg rounded-md z-50 bg-white">
          <div className="text-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Select Category
            </h3>
            <div className="mt-2 px-4 py-3 w-full">
              {categories &&
                categories.map((item, index) => {
                  return (
                    <div key={index}>
                      <button
                        onClick={() => getByCategory(item.id)}
                        className="bg-green-200 w-full my-1 py-1 rounded-md"
                      >
                        {item.name}
                      </button>
                    </div>
                  );
                })}
            </div>
            <div className="items-center px-4 py-3">
              <button
                onClick={() => showCategories()}
                className="px-4 py-2 bg-green-700 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default ModalCategories;
