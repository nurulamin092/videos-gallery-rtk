import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags:[],
    search:""
}

const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        tagSelected:(state,action)=>{
            state.tags.push(action.payload);
        },
        tagRemove:(state,action) => {
            const indexToRemove = state.tags.indexOf(action.payload);
           if (indexToRemove!== -1) {
            state.tags.splice(indexToRemove,1)
           }
        },
        search:(state,action) => {
             state.search = action.payload
        }
    }
}) 

export default filterSlice.reducer;

export const {tagSelected,tagRemove,search} = filterSlice.actions