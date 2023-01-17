import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center border border-green-800 m-5 p-5 text-xl font-semibold">
            <div className="border border-black flex justify-around gap-10 m-1 p-1 text-xl">
                <span className="logo">Redux Store</span>
                <Link to={"/"} className="">Home</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>
            <span className="">Cart Item: 0</span>
        </div >
    )
}

export default Navbar;