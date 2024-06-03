import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

async function Update() {
  // const [post, setPost] = useState(null)

  // const { id } = useParams()

  // const updateProduct = () => {
  //   const product = {
  //     image,
  //     productName,
  //     description,
  //     price,
  //     productInStock,
  //     category
  //   }
  //   axios.put(`https://agri-sales-backend-7.onrender.com/api/agri-sales/products/updateProduct/${id}`, product)
  //     .then(res => {
  //       setPost(res.data)
  //     })
  // }
  // if (!post) {
  //   return "No post"
  // }


  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <form
        className="w-[60vw] h-[50vh] flex flex-col gap-6 bg-[#45AB49] justify-center items-center p-5 rounded-xl"
      >
        <input
          type="file"
          name="file"
          placeholder="image"
          // value={product.image}
          // onChange={(e)=> setPost(e.target.value)}
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <input
          type="text"
          name="productName..."
          // value={product.productName}
          // onChange={(e)=> setPost(e.target.value)}
          placeholder="product name"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <input
          type="text"
          name="productInStock..."
          // value={product.productInStock}
          // onChange={(e)=>setPost(e.target.value)}
          placeholder="product in stock"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <input
          type="text"
          name="productInStock..."
          // value={product.category}
          // onChange={(e)=>setPost(e.target.value)}
          placeholder="product in stock"
          className="border-none rounded-md outline-none px-5 py-2 w-full"
        />
        <button type="submit" className="bg-black px-6 py-2.5 text-white rounded-2xl font-medium text-lg">Update</button>
      </form>
    </div>
  );
}

export default Update;
