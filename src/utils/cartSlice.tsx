import { createSlice } from "@reduxjs/toolkit";

interface CreateItems {
    items: any[]
}


const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state:CreateItems, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCartItems: (state)=> {
            return{items:[]}
        }
    }
})

export const {addItems, removeItem, clearCartItems} = cartSlice.actions


export default cartSlice.reducer