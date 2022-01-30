import { Link } from "react-router-dom";

function SubMenu() {
  return (
    <div>
      <div className="flex justify-around items-center mt-5 mb-5 mx-10">
        <div className="text-center">
          <i className="fas fa-users text-green-800 border-2 rounded-full p-3 px-3"></i>
          <p className="text-xs text-green-800">Referral</p>
        </div>
        <div className="text-center">
          <i className="fas fa-utensils text-green-800 border-2 rounded-full p-3 px-4"></i>
          <p className="text-xs text-green-800">Recipe</p>
        </div>
        <div className="text-center">
          <i className="fas fa-newspaper text-green-800 border-2 rounded-full p-3"></i>
          <p className="text-xs text-green-800">Articles</p>
        </div>
        <div className="text-center">
          <Link to="/shopping">
            <i className="fas fa-store text-green-800 border-2 rounded-full p-3"></i>
            <p className="text-xs text-green-800">Shopping</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
