
const CartReducer = (state, action)=>{
    switch(action.type){
        case "Add":
            return [...state, action.harvest]
        
        case "remove":

        case "Increase":
            const IndexI = state.findIndex(p=> p.id === action.id) 
            state[IndexI].quantity += 1
            return [...state]

        case "Decrease":
            const IndexD = state.findIndex(p=> p.id === action.id) 
            state[IndexD].quantity -= 1
            return [...state]

        default:
            state;
    }
}

export default CartReducer