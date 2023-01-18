import React from "react";
import Products from "../components/Products";

const Home = () => {
    return (
        <div>
            <section>
                <div className="mt-10 categories flex justify-around items-center gap-10">
                    <h1 className="text-2xl"><strong>Welcome to Our Store</strong></h1>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="#men">Men</a></li>
                    </ul>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="#women">Women</a></li>
                    </ul>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="#ssd">SSd's</a></li>
                    </ul>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="#bags">Bags</a></li>
                    </ul>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"><a href="#rings">Rings</a></li>
                    </ul>
                    <ul>
                        <li className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">LCD's<a href="#lcds"></a></li>
                    </ul>
                </div>
                <Products />
            </section>

        </div>
    )
}

export default Home;