import { createSlice } from '@reduxjs/toolkit'
export const allProductsSlice = createSlice({
    name: "AllProducts", 
    initialState:{
        Blog:[],
        update:[]
    },
    reducers: {
        moreInfo:(state,action)=>{
            state.Blog=action.payload

        },
        update:(state,action)=>{
            state.update = action.payload

        }

    }
 

});
export const { moreInfo,update } = allProductsSlice.actions;

export default allProductsSlice.reducer;
