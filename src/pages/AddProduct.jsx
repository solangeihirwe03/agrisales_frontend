import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {

  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [file, setFile] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleSubmitProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(); 
      formData.append("file", file);
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("category", category);
      const response = await axios.post("https://agri-sales-backend-7.onrender.com/api/agri-sales/products/addProduct", 
        formData, {
          headers: {
            "Content-Type" : "multipart/form-data"
          }
        }
      )
      if (response.status === 200 || response.status === 201) {
        console.log("Product successfully added!", response.data);
        setData([...data, response.data]);  
        setTimeout(() => {
          navigate("/products");
        }, 3000);
      } else {
        console.error("Failed to add product:", response.statusText);
      }
    } catch (error) {
      console.log("Error adding product:", error);
    }
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
              name="file"
              value={file}
              onChange={handleFileChange}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            {file && <p>File selected: {file.name}</p>}
            <div className="flex gap-6">
              <input
                type="text"
                placeholder="productName..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
              <input
                type="text"
                placeholder="description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-[19vw] shadow-lg bg-white px-4 py-2"
              />
            </div>
            <input
              type="text"
              placeholder="price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="product in stock..."
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-[40vw] shadow-lg bg-white px-4 py-2"
            />
            <input
              type="text"
              placeholder="category..."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
