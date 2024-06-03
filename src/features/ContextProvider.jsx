import { createContext, useReducer } from "react"
import CartReducer from "./Cartreducer";

const CartContext = createContext();


const ContextProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, [])
  return (
    <CartContext.Provider value={{cart, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}
export { CartContext, ContextProvider };
