import { getRelatedVideos } from "./relatedVideosAPI";


const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit")

const initialState = {
    relatedVideos:[],
    isLoading:false,
    isError:false,
    error:""
}

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/',
    async({tags,id})=>{
        const relatedVideos = await getRelatedVideos({tags,id});
        return relatedVideos;
    }
)

const relatedVideosSlice = createSlice({
    name:'relatedVideos',
    initialState,

    extraReducers:(builder)=> {
        builder
        .addCase(fetchRelatedVideos.pending,(state)=>{
            state.isLoading = true;
            state.isError = false;
        })
        .addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.relatedVideos = action.payload;
        })
        .addCase(fetchRelatedVideos.rejected,(state,action)=>{
            state.isLoading = false;
            state.isError = true;
            state.relatedVideos = [];
            state.error = action.error.message;
        })

    }

});

export default relatedVideosSlice.reducer;