import {createSlice} from "@reduxjs/toolkit"



const initialState={
    cartItems:[],
}


    export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart: (state, action) => {
           const findData = state.cartItems.findIndex((value) => {
                return value.id === action.payload.id
            });
            if (findData !== -1) {
                state.cartItems[findData].quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        DeleteItem: (state, action) => {
            // Filter out the item that matches the payload's id
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },
    }
});
    
export const {addToCart, DeleteItem} = cartSlice.actions
export default cartSlice.reducer
