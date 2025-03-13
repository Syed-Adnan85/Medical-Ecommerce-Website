import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductInfo = ({ getData }) => {
  const navigate = useNavigate();

  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    scrollTo(0, 0);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setInCart(cart.some((item) => item.id === getData.id));
  }, [getData.id]);

  const AddtoCart = () => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!inCart) {
      cart.push({ ...getData, quantity, totalPrice: getData.price * quantity });
      localStorage.setItem("cart", JSON.stringify(cart));
      setInCart(true);
      window.dispatchEvent(new Event("cartUpdated"));
    } else {
      navigate("/cart");
    }
  };

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col items-center min-h-fit pt-10 bg-gray-100">
      <div className="p-6 mb-14 space-y-3 bg-white shadow-lg rounded-lg w-full max-w-4xl">
        <h1 className="text-3xl text-center text-gray-800 font-bold mb-5">Product Information</h1>
        <div className="flex flex-col md:flex-row">
          <img src={getData.image} alt={getData.name} className="rounded-xl w-full md:w-1/2 h-64 object-cover mb-5 md:mb-0 md:mr-5" />
          <div className="flex flex-col justify-between w-full md:w-1/2">
            <div>
              <h3 className="text-2xl text-gray-800 font-semibold">{getData.name}</h3>
              <p className="text-xl text-gray-800 font-semibold">₹{getData.price}</p>
              <p className="text-gray-800 text-lg mt-3 mb-5">{getData.description}</p>
              <p className="text-gray-800 text-md mb-5">Category: {getData.category}</p>
              <p className="text-gray-800 text-md mb-5">Brand: {getData.brand}</p>
              <p className="text-gray-800 text-md mb-5">Expiry Date: {getData.expiry}</p>
            </div>
            {getData.stock && !inCart && (
              <div className="mb-5 flex items-center">
                <button
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-l-lg"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <input
                  type="number"
                  className="w-16 text-center border-t border-b border-gray-300"
                  value={quantity}
                  readOnly
                />
                <button
                  className="bg-gray-300 text-gray-800 px-3 py-1 rounded-r-lg"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>
            )}
            {getData.stock ? (
              <>
                <p className="text-green-500 font-semibold">In Stock</p>
                {isLoggedIn && inCart ? (
                  <button
                    className="mt-3 bg-gray-500 text-white px-4 py-2 w-fit md:w-1/2 rounded-lg cursor-pointer hover:bg-gray-600"
                    onClick={() => navigate("/cart")}
                  >
                    ✅ Added (Go to Cart)
                  </button>
                ) : (
                  <button
                    className="mt-3 bg-blue-500 text-white px-4 py-2 w-1/2 md:w-1/3 rounded-lg cursor-pointer hover:bg-blue-600"
                    onClick={AddtoCart}
                  >
                    Add to Cart
                  </button>
                )}
              </>
            ) : (
              <p className="text-red-500 font-semibold">Out of Stock</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;