import React from "react"
import { NavLink } from "react-router-dom"


const ProductInfo = ({getData}) => {




  return (
    <div className=" flex min-h-screen pt-10 bg-gray-500">
     
      <div className="p-6 mb-10 space-y-3"> 
         <h1 className="text-2xl text-center text-white font-semibold mb-5 ">Product Information </h1>
        <img src={getData.image} alt={getData.name} className="rounded-xl" />
        <h3 className="text-xl text-white">{getData.name}</h3>
        <p className="text-xl text-white">₹{getData.price}</p>  

   <p className="text-white text-2xl">{getData.description}</p>

        
        {getData.stock ?
            (
              <>
              <p className="text-green-400">In Stock</p>
              <NavLink to={'/cart'}>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2  rounded-lg cursor-pointer hover:bg-blue-600">
              Add to Cart
            </button></NavLink>
              </> 
            )
            :   <p className="text-red-400">Out of Stock</p>
             }
      </div>
    </div>
  )
}

export default ProductInfo