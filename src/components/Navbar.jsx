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
            <span className="mr-[2rem]">Cart Item: 0</span>
        </div >
    )
}

export default Navbar;