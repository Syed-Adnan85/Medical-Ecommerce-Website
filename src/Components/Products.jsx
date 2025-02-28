import React from "react";
import { NavLink } from "react-router-dom";
import { ProductsList } from "../data/ProductsData";

const Products = ({sendData}) => {

  return (
    <div className="flex flex-col pt-10 bg-gray-500">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        All Products
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mb-6">
       { ProductsList.map((product, index) => (



        <NavLink to="/productinfo"
        onClick={()=>sendData(product)}
        >
          <div key={index} className="bg-white flex flex-col items-center p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer"
         >
            
            <img src={product.image} alt={product.name} className="w-60 h-52 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
           
            {product.stock ?
            (
              <>
              <p className="text-green-400">In Stock</p>
              <NavLink to={'/cart'}>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 w-full rounded-lg cursor-pointer hover:bg-blue-600">
              Add to Cart
            </button></NavLink>
              </>
              
              
            )
            :   <p className="text-red-400">Out of Stock</p>
             }
        
          </div> 
          </NavLink>
        ))}
     
    </div>
    </div>
  );
};

export default Products;
