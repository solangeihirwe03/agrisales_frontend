import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"


const CartProduct = ({harvest}) => {
    const {cart, dispatch} = useContext(CartContext)
    const Increase = ()=>{
        const Index = cart.findIndex(p=> p._id === _id)
        if(cart[Index].quantity < 100000){
            dispatch({type: "Increase", _id})
        }
    }

    const Decrease = ()=>{
        const Index = cart.findIndex(p=> p._id === _id)
        if(cart[Index].quantity < 10){
            dispatch({type: "Decrease", _id})
        }
    }


  return (
    <div className="flex gap-10  border h-30 py-6">
        <img src={harvest.image.url} className="w-40" />
        <div className=" flex items-center gap-3">
            <h4>{harvest.productName}</h4>
            <h4>${harvest.price}</h4>
            <div className="flex flex-col items-center gap-2">
                <div className="flex gap-3">
                <button className=" rounded-full h-9 w-9 border-2 border-black text-lg" onClick={()=> Decrease(harvest._id)}><b>-</b></button>
                <button className="rounded">{harvest.productInStock}</button>
                <button className=" rounded-full h-9 w-9 border-2 border-black text-lg" onClick={()=> Increase(harvest._id)}><b>+</b></button>
                </div>
                <div><button className="py-1 px-2 bg-[#FF9C00] rounded font-medium">Remove</button></div>
            </div>
        </div>
    </div>
  )
}
export default CartProduct
