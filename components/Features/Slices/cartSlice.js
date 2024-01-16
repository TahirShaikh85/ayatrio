// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice=createSlice({
//     name:"cart",
//     initialState:{
//         data:null,
//         status:"idle",
//     },
//     reducers:{
//         setcartdata:(state,action)=>{
//             state.data=action.payload;
//             state.status="succeeded"
//         },
//         setCartStaus:(state,action)=>{
//             state.status=action.payload;
//         }
//     }   
// })


// export const {setcartdata,setCartStaus}=cartSlice.actions;
// export const selectCartData=(state)=>state.cart.data;
// export const selectCartStatus=(state)=>state.cart.status;

// export default cartSlice.reducer;



// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dbItems: null, // items fetched from the database
    orderId: null
  },
  reducers: {
    setDbItems: (state, action) => {
      state.dbItems = action.payload;
    },
    setOrderId: (state, action) => {
      state.orderId = action.payload
    }
  },
});

export const { setDbItems } = cartSlice.actions;
export const { setOrderId } = cartSlice.actions

export default cartSlice.reducer;
