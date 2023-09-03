import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter", 
    initialState:{
        value:0,
        val:0,
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decreament:(state)=>{
            if(state.value==0){
                state.value=0;
            }
            else{
                state.value-=1;
            }
            
        },
        dynamicAdd:(state,action)=>{
            state.val += action.payload;
        },
        dynamicSub:(state,action)=>{
            if(state.val==0){
                state.val=0;
            }
            else{
                state.val -= action.payload;
            }
            
        }
    }
});

export const {increment,decreament,dynamicAdd,dynamicSub} = counterSlice.actions;
export const selectCount = (state)=>state.counter.value;
export const selectVal = (state)=>state.counter.val;
export default counterSlice.reducer;