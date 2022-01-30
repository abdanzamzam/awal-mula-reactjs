import logo_light from "../assets/amLogoLight.png";

function About() {
  return (
    <>
      <div className="bg-green-800 text-center py-7">
        <div className="w-ful flex justify-center mb-2">
          <img src={logo_light} className="w-1/4" />
        </div>
        <div className="text-xs font-semibold text-white space-y-3 mt-6">
          <p>Kini sehat lebih mudah bersama Awal Mula</p>
          <p>Ikuti Kami di</p>
        </div>
        <div className="space-x-4 mt-4 flex justify-center items-center">
          <div className="bg-white w-5 h-5 flex justify-center items-center text-center rounded-md">
            <i className="fab fa-facebook text-xs text-green-800"></i>
          </div>
          <div className="bg-white w-5 h-5 flex justify-center items-center text-center rounded-md">
            <i className="fab fa-linkedin text-xs text-green-800"></i>
          </div>
          <div className="bg-white w-5 h-5 flex justify-center items-center text-center rounded-md">
            <i className="fab fa-youtube text-xs text-green-800"></i>
          </div>
          <div className="bg-white w-5 h-5 flex justify-center items-center text-center rounded-md">
            <i className="fab fa-instagram text-xs text-green-800"></i>
          </div>
        </div>
        <div className="text-xs text-white space-y-2 mt-5">
          <p>Email: customercare@awalmula.co.id</p>
          <p>CS: +62 811-3223-9709</p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default About;
