import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [image, setImage]= useState("")

  const handleImage = (e)=>{
    console.log(e.target.file)
    setImage(e.target.files[0])
  }
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    price: "",
    quantity: "",
    category: ""
  });

const handleInputs = (e)=>{
  setProductData(prev=> ({...prev , [e.target.name]: [e.target.value]}))
}

  const handleSubmitProduct = async (event) => {
    event.preventDefault();

    axios.post("https://agri-sales-backend-7.onrender.com/api/agri-sales/products/addProduct", {
      productData,
      image
    })
    .then(res=>{
      console.log(res)
      navigate('/products')
  })
    .catch(err=> console.log(err))
  }
  return (
    <div className="w-[70vw] flex items-center justify-center flex-col py-4 rounded-lg">
      <div className=" flex flex-col justify-center items-center border">
        <div className="h-[40vh] w-full">
          <img
            src="Stock.jpg"
            className="w-full h-full brightness-75 rounded-t-lg pb-5"
          />
        </div>
        <div className="w-[45%]">
          <form
            onClick={handleSubmitProduct}
            className="flex flex-col gap-4 w-full items-center px-5"
          >
            <input 
            type="file" 
            name='image'
            onChange={handleImage}
            className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="productName..."
                name='productName'
                onChange={handleInputs}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
              <input
                type="text"
                placeholder="description..."
                name='description'
                onChange={handleInputs}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="price..."
              name='price'
              onChange={handleInputs}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="product in stock..."
              name='quantity'
             onChange={handleInputs}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="category..."
              name='category'
              onChange={handleInputs}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <button
              type="submit"
              className="bg-[#45AB49] px-5 py-2 rounded-lg font-medium text-white"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct
