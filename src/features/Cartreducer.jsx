
export  const totalItems = (cart)=>{
    return cart.reduce((sum,harvest)=> sum + harvest.productInStock, 0)
}

export const totalPrice = (cart)=>{
    return cart.reduce((total, harvest)=> total + harvest.productInStock * harvest.price, 0)
}

const CartReducer = (state, action)=>{
    switch(action.type){
        case "Add":
            return [...state, action.harvest]
        
        case "Remove":
            return state.filter(p=> p.id !== action.id)

        case "Increase":
            const IndexI = state.findIndex(p=> p.id === action.id) 
            state[IndexI].productInStock += 1
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex(p=> p.id === action.id) 
            state[IndexD].productInStock -= 1
            return [...state]

        default:
            state;
    }
}

export default CartReducer