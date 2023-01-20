import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center m-2 p-2 text-xl font-semibold">
            <div className="flex justify-around  items-center gap-10 m-1 p-1 text-xl">
                <span className="logo text-2xl">Store.pk</span>
                <Link to={"/"} className="px-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded">Home</Link>
                <Link to={"/cart"} className="px-3 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 border border-blue-500 hover:border-transparent rounded ">Cart</Link>
            </div>
            <span className="flex justify-center items-center gap-2 mr-[2rem]"> Cart Item: 0 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
            </span>
        </div >
    )
}

export default Navbar;