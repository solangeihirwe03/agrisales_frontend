import { useContext } from "react"
import { CartContext } from "../features/ContextProvider"


const CartProduct = ({harvest}) => {
    const {cart, dispatch} = useContext(CartContext)
    const Increase = (id)=>{
        const Index = cart.findIndex((p)=> p.id === id)
        if(cart[Index].productInStock < 100000){
            dispatch({type: "Increase", id})
        }
    }
    const Decrease = (id)=>{
        const Index = cart.findIndex((p)=> p.id === id)
        if(cart[Index].productInStock > 1){
            dispatch({type: "Decrease", id})
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
                <button className=" rounded-full h-9 w-9 border-2 border-black text-lg" onClick={()=> Decrease(harvest.id)}><b>-</b></button>
                <button className="rounded">{harvest.productInStock}</button>
                <button className=" rounded-full h-9 w-9 border-2 border-black text-lg" onClick={()=> Increase(harvest.id)}><b>+</b></button>
                </div>
                <div><button className="py-1 px-2 bg-[#FF9C00] rounded font-medium" onClick={()=> dispatch({type: "Remove", id:harvest.id})}>Remove</button></div>
            </div>
        </div>
    </div>
  )
}
export default CartProduct
