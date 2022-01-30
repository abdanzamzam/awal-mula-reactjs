import resep_1 from "../assets/resep-1.jpg";
import resep_2 from "../assets/resep-2.jpg";
import resep_3 from "../assets/resep-3.jpeg";

function Resep() {
  return (
    <>
      <div className="flex justify-between my-5 bg-white p-2 rounded-md text-center items-center px-3">
        <p className="font-bold">Rekomendasi Resep</p>
        <div className="flex justify-center items-center text-xs text-center">
          <p>Lihat Semua</p>
          <i className="fas fa-angle-right ml-2"></i>
        </div>
      </div>
      <div className="flex justify-between space-x-2">
        <img src={resep_1} className="w-1/2 h-auto bg-no-repeat bg-center" />
        <div className="space-y-2 pb-2">
          <img src={resep_2} className="h-1/2 w-full" />
          <img src={resep_3} className="h-1/2 w-full" />
        </div>
      </div>
    </>
  );
}

export default Resep;
