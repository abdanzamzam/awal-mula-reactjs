import logo from "../assets/logo-main.png";

function NavTop() {
  return (
    <nav className="bg-white p-2 mt-0 fixed md:w-96 lg:w-96 xl:w-96 z-10 top-0 shadow-md h-16">
      <div className="flex justify-between items-center">
        <img src={logo} className="h-12" />
        <div className="flex justify-center items-center mr-1">
          <input
            type="text"
            className="w-2/3 h-7 rounded-xl mr-2 bg-gray-100 pl-4 text-xs font-sans ml-10 focus:ring-sky-500"
            placeholder="Search something ..."
          />
          <div className="bg-green-700 h-7 w-7 rounded-lg text-center">
            <i className="fas fa-search text-sm text-white pt-1"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavTop;
