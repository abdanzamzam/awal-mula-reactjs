import logoApp from "../assets/amLogo.png";

function DownloadApp() {
  return (
    <>
      <div className="bg-green-100 h-16 flex items-center space-x-3">
        <img src={logoApp} className="w-12 ml-3" />
        <div>
          <p className="font-semibold text-md">Mula Apps</p>
          <p className="text-xs">Kini lebih mudah Bersama Awal Mula.</p>
        </div>
        <div className="bg-green-700 h-8 w-16 flex justify-center items-center rounded-lg">
          <p className="text-white text-xs">INSTALL</p>
        </div>
        <p>X</p>
      </div>
    </>
  );
}

export default DownloadApp;
