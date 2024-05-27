import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MdEdit, MdDelete } from "react-icons/md";

const Products = () => {
    const [products, setProduct] = useState([])
    const FetchingData = async()=>{
        await axios({
            method: "GET",
            url: 'https://agri-sales-backend-7.onrender.com/api/agri-sales/products/productList'
        })
        .then((response)=>{
            console.log(response.data.getProduct);
            setProduct(response.data.getProduct);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect(()=>{
        FetchingData();
    },[])

    const HandleUpdate = async(e)=>{
        e.preventDefault();

        const updatedProduct = products;
        try{
            const response = await axios.put(`https://agri-sales-backend-7.onrender.com/api/agri-sales/products/update/${products.id}`)
        }catch(error){

        }

    }
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong>Products</strong>
      <div className="mt-3">
        <table className=" w-full text-gray-700 h-[50vh]">
          <thead className="bg-black text-white">
            <tr>
              <td>Produdt Id</td>
              <td>Product Name</td>
              <td>Price</td>
              <td>Category</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody className="border-2">
            {products.map((product) => (
              <tr key={product.id} className=" p-9 border">
                <td>
                  <Link to={`/products/${product.id}`}>#1</Link>
                </td>
                <td>
                  <Link to={`/products/${product.productName}`}>
                    {product.productName}
                  </Link>
                </td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td className="flex">
                  <Link to={`/update/:id`}>
                    <MdEdit fontSize={26} className="text-[blue]" />
                  </Link>
                  <span>
                    <Link to={`/delete/:id`}>
                      <MdDelete fontSize={25} className="text-[red]" />
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
