import article from "../assets/article.jpg";

function Article() {
  return (
    <>
      <div className="flex justify-between my-4 bg-green-50 p-2 rounded-md text-center items-center px-3">
        <p className="font-bold">Temukan Artikelmu</p>
        <div className="flex justify-center items-center text-xs text-center">
          <p>Lihat Semua</p>
          <i className="fas fa-angle-right ml-2"></i>
        </div>
      </div>
      <div className="my-4">
        <p className="text-base text-gray-700 font-bold my-5">
          5 Tips Menjaga Kelembaban Kulit Selama Puasa
        </p>
        <div className="flex justify-between space-x-3">
          <img src={article} className="w-36 rounded-lg h-24" />
          <div>
            <p className="text-xs text-gray-400">
              Ketika menjalankan puasa, sering kali kita menghadapi masalah
              kulit kering dan ...
            </p>
            <div className="flex justify-between mt-1 text-xs text-gray-600">
              <p>27 Januari 2022</p>
              <p>3.6 menit</p>
            </div>
            <div className="mt-2 w-full bg-green-800 text-white rounded-lg px-4 py-1 pb-2 items-center font-medium text-center">
              <p>Baca Selengkapnya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article;
