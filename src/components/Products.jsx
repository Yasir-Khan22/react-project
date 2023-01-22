import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetcher } from "react-router-dom";
import { add } from "../store/cartSlice"

const Products = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch("https://fakestoreapi.com/products")
            const data = await res.json();
            setProducts(data)

        }
        fetchProduct()
    }, [])


    const handleAdd = (product) => {
        dispatch(add(product))
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img className="h-20 flex m-auto" src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Products;
