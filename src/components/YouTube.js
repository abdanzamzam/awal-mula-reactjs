import youtube_1 from "../assets/youtube-1.jpg";
import youtube_2 from "../assets/youtube-2.png";
import youtube_3 from "../assets/youtube-3.png";

function YouTube() {
  return (
    <>
      <div className="flex justify-between my-5 bg-white p-2 rounded-md text-center items-center px-3">
        <p className="font-bold">Youtube Awal Mula</p>
        <div className="flex justify-center items-center text-xs text-center">
          <p>Lihat Semua</p>
          <i className="fas fa-angle-right ml-2"></i>
        </div>
      </div>
      <div className="space-y-2 md:w-96 lg:w-96 xl:w-96">
        <img src={youtube_1} className="rounded-xl" />
        <div className="flex justify-between">
          <img src={youtube_2} className="rounded-xl pr-1 w-1/2" />
          <img src={youtube_3} className="rounded-xl pl-1 w-1/2" />
        </div>
      </div>
    </>
  );
}

export default YouTube;
