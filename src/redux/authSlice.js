import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

export const getAuthors=createAsyncThunk('getAuthors', async()=>{
    const response=await fetch('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News-Authors?select=*',{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Auhorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
    })
    const jsonData=response.json()
    return jsonData
})


export const getCurrentAuthor=createAsyncThunk('getCurrentAuthor', async(authorId)=>{
    const response=await fetch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News-Authors?id=eq.${authorId}&select=*`,{
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Auhorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
        }
    })
    const jsonData=response.json()
    return jsonData
})


export const authSlice=createSlice({
    name:'auth',
    initialState:{
        isLoggedIn:localStorage.getItem('isLoggedIn')?JSON.parse(localStorage.getItem('isLoggedIn')):false,
        authors:[],
        currentAuthor:{}
    },
    reducers:{
        setIsLoggedIn:(state, action)=>{
            state.isLoggedIn=!state.isLoggedIn
            localStorage.setItem('isLoggedIn', state.isLoggedIn)
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getAuthors.fulfilled, (state, action)=>{
            state.authors=action.payload
        })
        builder.addCase(getCurrentAuthor.fulfilled, (state, action)=>{
            state.currentAuthor=action.payload[0]
        })
    }
})

export const {setIsLoggedIn}=authSlice.actions

export default authSlice.reducer