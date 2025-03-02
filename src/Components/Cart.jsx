import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setCheckout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
      return;
    }

    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart.map(item => ({ 
      ...item, 
      quantity: item.quantity || 1, 
      totalPrice: item.price * (item.quantity || 1) 
    })));
  }, [navigate]);

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { 
            ...item, 
            quantity: Math.max(1, parseInt(item.quantity || 1) + change), 
            totalPrice: item.price * Math.max(1, parseInt(item.quantity || 1) + change)
          }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const openCheckout = () => {
    setCheckout(true);
  };

  const confirmCheckout = () => {
    localStorage.removeItem("cart"); 
    setCartItems([]);
    setCheckout(false);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-3">

              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />


              <h3 className="text-lg font-semibold">{item.name}</h3>

     
              <p className="text-gray-600">₹{item.totalPrice}</p>

    
              <div className="flex items-center space-x-2">
                <button
                  className="bg-gray-300 px-2 rounded-lg"
                  onClick={() => updateQuantity(item.id, -1)}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-300 px-2 rounded-lg"
                  onClick={() => updateQuantity(item.id, 1)}
                >
                  +
                </button>
              </div>

       
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

      
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold mb-3">Total: ₹{getTotalPrice()}</h3>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={openCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}

    
      {showCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold text-center">Confirm Checkout</h3>
            <p className="text-center text-gray-600 mt-2">Total Amount: ₹{getTotalPrice()}</p>
            
            <div className="flex justify-between mt-6">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => setCheckout(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={confirmCheckout}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
