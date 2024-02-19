import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ searchHandle, cartCount }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="shadow-lg w-full">
      <div className="w-[85%] mx-auto flex justify-between items-center text-2xl font-semibold text-gray-800 py-4">
        <div className="logo">
          <h1 className="">Products</h1>
        </div>
        <div className="fields flex gap-14">
          <div className="search">
            <input
              type="text"
              onChange={searchHandle}
              placeholder="seach.."
              className="text-[1rem] px-6 py-1 bg-gray-100 rounded-lg "
            />
          </div>
          <div className="cart relative">
            {cartCount > 0 && (
              <span className="bg-gray-300 w-6 h-6 flex items-center justify-center rounded-full text-[1rem] absolute top-[-0.8rem] right-[-0.8rem]">
                {cartCount}
              </span>
            )}
            <Link to="/allProducts">
              <i className="fa-solid fa-cart-shopping text-gray-400"></i>
            </Link>
          </div>
          <div className="logoutBtn">
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
