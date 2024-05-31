import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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


export const getNewsByAuthor=createAsyncThunk('getNewByAuthor', async(authorName)=>{
  const response=await fetch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News?written_by=eq.${authorName}&select=*`,{
    method:"GET",
    headers:{
      apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
      Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
    }
  }
)
const jsonData=response.json()
return jsonData
})


export const getNewsById=createAsyncThunk("getSepcificNews", async(id)=>{
    const response=await fetch(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News?id=eq.${id}&select=*`,{
      method:"GET",
      headers:{
        apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
        Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs'
      }
    })
    const jsonData=response.json()
    return jsonData
})


// export const createNewContent=createAsyncThunk('createNewContent', async(newContent)=>{
//   const sentData=await axios.post(`https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News`, newContent,{
//     headers:{
//       apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
//       Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
//       "Content-Type": "application/json"
//     }
//   })

//   return sentData
// })

export const newsSlice=createSlice({
    name:"news",
    initialState:{
        news:[],
        politicNews:[],
        specificNews:{},
        newsByAuthor:[]
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
        builder.addCase(getNewsById.fulfilled, (state, action)=>{
            state.specificNews=action.payload
        })
        builder.addCase(getNewsByAuthor.fulfilled, (state, action)=>{
          state.newsByAuthor=action.payload
        })
    }
})

export default newsSlice.reducer