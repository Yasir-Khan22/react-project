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
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    )
}
export default Products;