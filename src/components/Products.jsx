import React, { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            console.log(data)
            setProducts(data)

        }
        fetchProduct()
    }, [])


    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div class="flex justify-center">
                    <div class="max-w-xs rounded-lg bg-white shadow-lg">
                        <img class="rounded-t-lg" src={product.image} alt="" />
                        <div class="p-6 border border-black">
                            <h5 class="mb-2 text-xl font-medium text-gray-900">{product.title}</h5>
                            <p class="mb-4 text-base text-gray-700"><h5>{product.price}</h5></p>
                            <button type="button" class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">Add to Cart</button>
                        </div>
                    </div>
                </div>


            ))}
        </div>
    )
}
export default Products;