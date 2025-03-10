import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ getData }) => {
  const navigate = useNavigate();
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    scrollTo(0, 0);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cart.some((item) => item.id === getData.id));
  }, [getData.id]);

  const AddtoCart = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!inCart) {
      cart.push(getData);
      localStorage.setItem("cart", JSON.stringify(cart));
      setInCart(true);
      window.dispatchEvent(new Event("cartUpdated"));
    } else {
      navigate("/cart");
    }
  };

  return (
    <div className="flex min-h-fit pt-10 bg-gray-100">
      <div className="p-6 mb-14 space-y-3">
        <h1 className="text-2xl text-center text-gray-800 font-semibold mb-5">Product Information</h1>
        <img src={getData.image} alt={getData.name} className="rounded-xl" />
        <h3 className="text-xl text-gray-800">{getData.name}</h3>
        <p className="text-xl text-gray-800">₹{getData.price}</p>
        <p className="text-gray-800 text-2xl">{getData.description}</p>
        {getData.stock ? (
          <>
            <p className="text-green-500">In Stock</p>
            <button
              className={`mt-3 text-white px-4 py-2 w-full md:w-1/3 rounded-lg cursor-pointer ${inCart ? "bg-gray-700 hover:bg-gray-800" : "bg-blue-500 hover:bg-blue-600"}`}
              onClick={AddtoCart}
            >
              {inCart ? "✅ Added (Go to Cart)" : "Add to Cart"}
            </button>
          </>
        ) : (
          <p className="text-red-500">Out of Stock</p>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;