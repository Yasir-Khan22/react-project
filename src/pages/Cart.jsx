import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const handleRemove = (productID) => {
        dispatch(remove(productID))
    }
    return (
        <div className="cartCard__wrapper">
            {products.map((product) => (
                <div className="cart__card" key={product.id}>
                    <img className="h-20 flex m-auto" src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleRemove(product.id)} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Remove
                    </button>
                </div>
            ))}
        </div>
    )
}



export default Cart;