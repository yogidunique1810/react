import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

const initialState={
    products:[],
    loading:true,
    error:null,
    status:"pending"
};
const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getProductsData.pending,(state,action)=>{
            state.loading=true;
            state.error="";
            state.products=[];
            state.status="pending";
        })
        .addCase(getProductsData.fulfilled,(state,action)=>{
            state.loading=false;
            console.log(action.payload);
            state.products = action.payload;
            console.log(state.products);
            state.error="";
            state.status="fulfilled";
        })
        .addCase(getProductsData.rejected,(state,action)=>{
            state.loading=false;
            state.products=[];
            state.error=action.payload.error;
            state.status="rejected";
        })
    }
})

export default productSlice.reducer

export const getProductsData = createAsyncThunk('',async()=>{
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data;
})