import React,{useState,useEffect} from "react";
import { NavLink ,useLocation, useNavigate} from "react-router-dom";
import { ProductsList } from "../data/ProductsData";


const Products = ({sendData}) => {

  const [cartItems, setCartItems] = useState([]);
  const [search, setSearch] = useState("");
  
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
  const isLoggedIn = localStorage.getItem("isLoggedIn");
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

  return (
    <div className="flex flex-col pt-10 bg-gray-500">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        All Products
      </h2>
<div className="flex justify-center mb-6 px-4">
  <input
   type="text"
   placeholder="Search for medicines, health products..."
    className="p-3 rounded-lg w-full md:w-1/3 outline-none border bg-gray-800 border-black text-white  "
    onChange={(e) => setSearch(e.target.value)}
  
  />
</div>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        <button className="bg-gray-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>setSelectedCategory("All")}  >All</button> 
        <button className="bg-gray-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>setSelectedCategory("Medicines")}  >Medicines</button> 
        <button className="bg-gray-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>setSelectedCategory("Personal Care")}  >Personal Care</button>
        <button className="bg-gray-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>setSelectedCategory("Supplements")}  >Supplements</button>
        <button className="bg-gray-700 rounded-lg text-white px-4 py-2 cursor-pointer hover:bg-gray-600" onClick={()=>setSelectedCategory("Health Devices")}  >Health Devices</button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
       { filterProducts.length > 0 ? (

      filterProducts.map((product, index) => (

      <div key={index} className="bg-white flex flex-col items-center p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
              <NavLink to="/productinfo" key={index}
        onClick={()=>sendData(product)}
        >
            <img src={product.image} alt={product.name} className="w-60 h-52 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
           
            </NavLink>
            {product.stock ?
            (
              <>

              <p className="text-green-400">In Stock</p>
              
              {cartItems.some((item) => item.id === product.id) ? (
                  <button
                    className="mt-3 bg-gray-500 text-white px-4 py-2 w-full rounded-lg cursor-pointer hover:bg-gray-600"
                    onClick={() => navigate("/cart")}
                  >
                    ✅ Added (Go to Cart)
                  </button>
                ) : (
                  <button
                    className="mt-3 bg-blue-500 text-white px-4 py-2 w-full rounded-lg cursor-pointer hover:bg-blue-600"
                    onClick={() => AddtoCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </>
              
              
            )
            :   <p className="text-red-400">Out of Stock</p>
             }
        
          </div> 
          
        ))
       ) : (
        <p className="text-center text-gray-500 w-full">No products found.</p>
       )
      }
     
    </div>
    </div>
  );
};

export default Products;
