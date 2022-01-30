import React from "react";

function Product({ products, handleNum }) {
  return (
    <div className="flex flex-wrap justify-center">
      {products &&
        products.map((item, index) => {
          return (
            <div key={index} className="w-44 p-1">
              <div className="h-60 border-2 border-gray-100 rounded-lg p-3 pb-52">
                <img
                  className="h-36"
                  src={`https://cuan.awalmula.co/pub/media/catalog/product${
                    item.media_gallery_entries[0].file
                      ? item.media_gallery_entries[0].file
                      : item.media_gallery_entries[1].file
                  }`}
                />
                <p className="mt-6 text-green-700 font-semibold text-xs">
                  {item.name}
                </p>
                <p className="text-xs font-semibold">Rp. {item.price}</p>
              </div>
            </div>
          );
        })}
      {products.length > 0 && (
        <div className="flex justify-center w-full text-center mt-5">
          <button
            onClick={() => handleNum()}
            className="bg-green-700 rounded-md px-3 h-8 text-white font-semibold"
          >
            <i className="fas fa-eye mr-1"></i> See More
          </button>
        </div>
      )}
    </div>
  );
}

export default Product;
