import React from 'react'
import{ useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux'
import { createNewContent } from '../redux/newsSlice';
import axios from 'axios';

const AddNews = () => {
    const {currentAuthor}=useSelector(store=>store.auth)
    const dispatch=useDispatch()
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const [category, setCategory]=useState([])

    
    
    
    const date=new Date()
    const [newInfo, setNewInfo]=useState({
        written_by:currentAuthor.name,
        title:'',
        description:'',
        day:date.getFullYear()+"-"+"0"+date.getMonth()+"-"+date.getDate(),
        time:date.getHours()+":"+date.getMinutes(),
    })

    
    
    let {description}=newInfo
    let handleChangeForJodit = (key, newContent)=>{
        setNewInfo(
            {
                ...newInfo,
                [key]: newContent
            }
        )
    }
    
    const handleChange=(e)=>{
        setNewInfo(prevState=>{
            return {...prevState, [e.target.name]:e.target.value}
        })
    }
    
    
    const categories=["Politics","Culture","Money", "Health", "Technology", "Science"]

    const removeCategory = (targetIndex) => {
        const newArray = category.filter((item, index) => index !== targetIndex);
        setCategory(newArray); // Updates the state with the new array
      };

    const handleSubmit=async(e)=>{
       
        e.preventDefault();
            
        const {written_by,title,description,day, time}=newInfo

        const data={
            written_by:written_by,
            title:title,
            description:description,
            day:day,
            time:time,
            category:category
        }

      await axios.post('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News', data, {
        headers:{
            apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
            "Content-Type": "application/json"
        }
      })
    }


    console.log(category)
    console.log(newInfo)
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <div className="container">
                <div className="row mt-5">

                    <div className="col-12 d-flex justify-content-start">
                        <input type='text' defaultValue={newInfo.written_by} disabled/>
                    </div>

                    <div className="col-12 mb-3">
                        <label htmlFor='title' className='fw-bold fs-2'>Title</label>
                        <input type='text' name='title' id='title' onChange={handleChange} className='w-100 rounded' placeholder='Title....'/>
                    </div>
                    <hr/>
                    <div className="col-12">
                        <h2>Category</h2>
                        {
                            categories.map((ctgr)=>{ 
                                return <button type='button' className='btn btn-secondary mx-2' onClick={()=>setCategory([...category, ctgr])}>{ctgr}</button>
                            })
                        }

                        {/* <button type='button' onClick={showData}>Submit</button> */}
                    </div>

                    <div className="col-12 py-3 border rounded mb-3">
                        {category.length===0?<h2 className='text-secondary'>Choose Category....</h2>:
                        category.map((ct, i)=>{
                            return <span className='border rounded bg-dark text-light p-2 '>
                                {ct}
                                <span className='border rounded mx-2 bg-danger' role='button' onClick={()=>removeCategory(i)}>x</span>
                            </span>
                        })
                        }
                    </div>
                    
                    <hr/>
                    <div className="col-12">
                    <JoditEditor
                        ref={editor}
                        value={description}
                        name='description'
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newCont => setContent(newCont)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => handleChangeForJodit('description', newContent)}
                    />
                    </div>
                    <div className="col-12 my-4">
                        <button type='submit' className='btn btn-primary w-50'>Add</button>
                    </div>
                </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default AddNews
