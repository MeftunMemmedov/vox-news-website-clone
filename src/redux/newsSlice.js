import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getNews=createAsyncThunk("getNews",async()=>{
    const response=await fetch('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News?select=*',{
      method:"GET",
      headers:{
        apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
      }
    })

    const jsonData=await response.json()
    return jsonData
  })

// export const getPoliticNews=createAsyncThunk("getPoliticNews", async()=>{
//     const response=await fetch('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News?category=eq.{Politics}&select=*',{
//       method:"GET",
//       headers:{
//         apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
//         Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
//       }
//     })
//     const jsonData=response.json()
//     return jsonData
// })

export const getSepcificNews=createAsyncThunk("getSepcificNews", async(category)=>{
    const response=await fetch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News?category=eq.{${category}}&select=*`,{
      method:"GET",
      headers:{
        apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
      }
    })
    const jsonData=response.json()
    return jsonData
})

export const newsSlice=createSlice({
    name:"news",
    initialState:{
        news:[],
        politicNews:[],
        specificNews:[]
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getNews.fulfilled, (state, action)=>{
            state.news=action.payload
        })
        // builder.addCase(getPoliticNews.fulfilled, (state, action)=>{
        //     state.politicNews=action.payload
        // })
        builder.addCase(getSepcificNews.fulfilled, (state, action)=>{
            state.specificNews=action.payload
        })
    }
})

export default newsSlice.reducer