import React,{useState,useEffect} from "react";
import { NavLink ,useLocation, useNavigate} from "react-router-dom";
import { ProductsList } from "../data/ProductsData";


const Products = ({sendData}) => {

  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  
  useEffect(() => {
    scrollTo(0, 0);
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const location=useLocation();

  const category=location.state?.category || "All";

  const [selectedCategory, setSelectedCategory] = useState(category);

  const filterProducts = ProductsList.filter(
    (product) =>
      (selectedCategory === "All" || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase()) 
  );


    const navigate=useNavigate();
const AddtoCart = (product) => {

  if (!isLoggedIn) {
  navigate("/login");
  
  }
  else{
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartItems(cart);
      window.dispatchEvent(new Event("cartUpdated"));
  }
};
const categories = [
  "All",
  "Medicines",
  "Supplements",
  "Personal Care",
  "Health Devices",
  "Baby Care",
  "Skin Care",
  "Fitness & Wellness",
  "Ayurvedic & Herbal",
  "Diabetic Care",
];

  return (
    <div className="flex flex-col pt-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-black text-center mb-6">
        All Products
      </h2>

      <div className="flex justify-center flex-wrap mb-10 px-4 space-x-4 space-y-5">
        <input
          type="text"
          placeholder="Search for medicines, health products..."
          className="p-3 rounded-lg w-full md:w-1/3 outline-none border border-black text-black"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 rounded-lg w-fit  h-fit outline-none border border-black text-black"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-6 ">
       { filterProducts.length > 0 ? (

      filterProducts.map((product, index) => {
        const price = parseFloat(product.price) || 0; 
        const discountPercentage = parseFloat(product.discount) || 0; 
        const discountedPrice = price - (price * discountPercentage) / 100;

        return (
          <div key={index} className="relative bg-white flex flex-col pb-2 items-center rounded-lg shadow-md hover:shadow-lg cursor-pointer">
            {product.stock ? (
              <span className="absolute top-2 left-2 bg-green-400 text-white px-2 py-1 rounded">In Stock</span>
            ) : (
              <span className="absolute top-2 left-2 bg-red-400 text-white px-2 py-1 rounded">Out of Stock</span>
            )}
            <NavLink to="/productinfo" key={index} onClick={() => sendData(product)}>
              <img src={product.images[0]} alt={product.name} className="w-60 h-52 object-cover rounded-lg" />
              <h3 className="text-lg pl-3 pt-3 font-semibold">{product.name}</h3>
              <div className="pl-3 pt-1">
                <p className="text-gray-600 line-through">₹{price.toFixed(2)}</p>
                <p className="text-gray-800 font-bold">₹{discountedPrice.toFixed(2)}</p>
                <p className="text-green-600">{discountPercentage}% off</p>
              </div>
              <p className="text-gray-600 pl-3 pt-1">{product.category}</p>
            </NavLink>
            {product.stock ? (
              <>
                {isLoggedIn && cartItems.some((item) => item.id === product.id) ? (
                  <button
                    className="mt-3 bg-gray-500 text-white py-2 px-4 w-fit rounded-lg cursor-pointer hover:bg-gray-600"
                    onClick={() => navigate("/cart")}
                  >
                    ✅ Added (Go to Cart)
                  </button>
                ) : (
                  <button
                    className="mt-3 bg-blue-500 text-white py-2 px-4 w-fit rounded-lg cursor-pointer hover:bg-blue-600"
                    onClick={() => AddtoCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </>
            ) : (
              <button
                className="mt-3 bg-blue-400 text-white py-2 px-4 w-fit rounded-lg cursor-not-allowed"
                disabled
              >
                Add to Cart
              </button>
            )}
          </div>
        );
      })
       ) : (
        <p className="text-center text-gray-500 w-full">No products found.</p>
       )
      }
     
    </div>
    </div>
  );
};

export default Products;
