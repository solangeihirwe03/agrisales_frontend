import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"
import CartProduct from "../components.jsx/CartProduct"

const Cart = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="pt-12 flex justify-between mx-16 my-8">
      <div>
        {cart.map(p=>(
          <CartProduct harvest={p}></CartProduct>
        ))}
      </div>
      <div className="w-80 h-64 border bg-[#969696] ">
        <div className="p-2 border">Order Details</div>
        <h5>Total Items: </h5>
        <h5>Total Price: </h5>
        <p>MOMO pay</p>
        <button>Checkout</button>
      </div>
    </div>
  )
}

export default Cart