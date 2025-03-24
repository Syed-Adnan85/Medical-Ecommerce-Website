import React from 'react'
import { Link,NavLink,useNavigate } from "react-router-dom";
import Banner from "./Banner";
import { categories, featuredProducts, deals } from '../data/ProductsData';

const Home = ({sendToInfo}) => {
scrollTo(0, 0);
const  navigate=useNavigate();

  const sendData=(product)=>{
    navigate("/products", {state: {category: product}
    });
  }

  return (
    <div className="bg-gray-100	 min-h-screen  flex flex-col">
    <Banner/>
    <section className="container mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Shop by Categories
      </h2>
      <div className='flex flex-wrap justify-center gap-10 mb-10'>

   
     {
        categories.map((category, index) => (
            <div
            key={index}
            onClick={() => sendData(category.title)}
            className="flex flex-col gap-10 items-center w-52 bg-white pb-3  rounded-lg shadow-md hover:shadow-lg cursor-pointer">
          
            <img
                src={category.image}
                alt={category.title}
                className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold text-gray-700 ml-4">
                {category.title}
            </h3>
            </div>
        ))
     }
        </div>
    </section>
    <section className="container mx-auto my-10 px-4">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {featuredProducts.map((product, index) => (
            <NavLink 
            to="/productinfo"
            key={index}
            className="bg-white shadow-md rounded-lg pb-3 text-center  hover:shadow-lg "
            onClick={() => sendToInfo(product)}
            >
              
              <img src={product.image} alt={product.name} className="w-full md:h-52 object-cover  rounded-lg mb-3" />
              <div className='text-left mb-3'>
              <h3 className="text-lg font-semibold ml-3">{product.name}</h3>
              <p className="text-gray-600 ml-3">₹{product.price}</p>
              </div>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer--">
                Check Now
              </button>
            </NavLink>
          ))}
        </div>
        <br />
        <Link to="/products" className='ml-[43%] '>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition cursor-pointer">
              View All Products
            </button>
          </Link>
      </section>

   
      <section className="container mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Limited-Time Deals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {deals.map((deal, index) => (
          <NavLink
          to="/productinfo"
          onClick={() => sendToInfo(deal)}
          key={index} className="relative bg-white shadow-md rounded-lg pb-3 text-center hover:shadow-lg space-x-2 ">
            <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg">
              {deal.discount}
            </div>
            <img src={deal.image} alt={deal.name} className="w-full md:h-52 object-cover rounded-lg mb-3" />
            <h3 className="text-lg font-semibold">{deal.name}</h3>
            <p className="text-gray-600">₹{deal.price}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">
              Grab Now
            </button>
          </NavLink>
        ))}
      </div>
    </section>


  </div>
);
}



export default Home

