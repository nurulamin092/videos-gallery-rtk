import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tags:[],
    search:""
}

const filterSlice = createSlice({
    name:'filter',
    initialState,
    reducers:{
        tagsSelected:(state,action)=>{
            state.tags.push(action.payload)
        },
        tagRemove:(state,action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1)  {
                state.tags.splice(indexToRemove,1)
            }
         
        },

        searched: (state,action) => {
            state.search = action.payload
        }
    }
});

export default filterSlice.reducer;

export const {tagsSelected,tagRemove,searched} = filterSlice.actions;