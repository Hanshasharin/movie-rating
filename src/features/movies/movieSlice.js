import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const movieSlice = createSlice({
    name:'movies',
    initialState:{ 
        value : [], 
        limit:5
    },
    reducers:{
       
        
         getMovies: (state,action)=>{
             

state.value= action.payload

         },
         updateLimit:(state)=>{
state.limit += 5
         }
    }

})

export const {getMovies,updateLimit} = movieSlice.actions
export default movieSlice.reducer