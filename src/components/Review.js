import React from "react";

function Review() {
  return (
    <>
      <div className="flex justify-around items-center my-5 py-8 text-center px-9">
        <div>
          <i className="fas fa-medal text-green-800 text-4xl mb-2"></i>
          <p className="text-xs font-semibold">
            100%
            <br />
            Produk Lokal
          </p>
        </div>
        <div>
          <i className="fas fa-leaf text-green-800 text-4xl mb-2"></i>
          <p className="text-xs font-semibold">
            Mitra Mula
            <br />
            Terpilih
          </p>
        </div>
        <div>
          <i className="fas fa-comments text-green-800 text-4xl mb-2"></i>
          <p className="text-xs font-semibold">
            Inspirasi
            <br />
            Hidup Sehat
          </p>
        </div>
      </div>
    </>
  );
}

export default Review;
