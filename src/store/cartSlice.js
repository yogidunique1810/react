import {createSlice} from '@reduxjs/toolkit'
const initialState=[]
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            console.log(state);
            console.log(action);
            return state.filter((state,index)=>state.id!==action.payload.id)
        }
    }
})

export const {add,remove} = cartSlice.actions;
export default cartSlice.reducer