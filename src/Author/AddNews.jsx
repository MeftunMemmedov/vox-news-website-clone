import React, { useEffect } from 'react'
import{ useMemo, useRef, useState } from 'react'
import JoditEditor from 'jodit-react';
import { useDispatch, useSelector } from 'react-redux'
import { createNewContent } from '../redux/newsSlice';
import axios from 'axios';
import { TiDelete } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const AddNews = () => {
    const {currentAuthor}=useSelector(store=>store.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const editor = useRef(null);
	const [content, setContent] = useState('');


    
    
    
    const date=new Date()
    const [newInfo, setNewInfo]=useState({
        written_by:'',
        title:'',
        main_img:'',
        description:'',
        category:[],
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

    const addCategory=(category)=>{
        setNewInfo(prevInfoData=>({...prevInfoData,category:[...newInfo.category, category]}))
    }
    const removeCategory = (targetIndex) => {
        const newArray = newInfo.category.filter((item, index) => index !== targetIndex);
        setNewInfo(prevInfoData=>({...prevInfoData, category:newArray}))
      };

    const handleSubmit=async(e)=>{
       
        e.preventDefault();

        await axios.post('https://flvxlsycpoxwclnqfrvr.supabase.co/rest/v1/News', newInfo, {
            headers:{
                apikey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZsdnhsc3ljcG94d2NsbnFmcnZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMjM4NDAsImV4cCI6MjAyNDY5OTg0MH0.6_-pdewIM3-_Ai2IGf1yhlOjeWZU9rta-l7oN35FDUs',
                "Content-Type": "application/json"
            }
        })

      navigate('/author')
    }

    useEffect(()=>{
        setNewInfo(prevInfoData=>({...prevInfoData, written_by:currentAuthor.name}))
    },[currentAuthor])

    useEffect(()=>{
        console.log(newInfo)
    },[newInfo])
  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="container-fluid">
        <div className="container">
            <div className="row mt-5">
                <div className="col-8 m-auto border py-2 rounded shadow text-start">
                <div className="row">

                    <div className="col-12 d-flex justify-content-start">
                        <label className='mx-2 mt-1'>By</label>
                        <input type='text' defaultValue={newInfo.written_by} disabled/>
                    </div>

                    <div className="col-12 my-4">
                        <label htmlFor='title' className='fw-bold fs-2'>Title</label>
                        <input type='text' name='title' id='title' onChange={handleChange} className='w-100 rounded' placeholder='Title....'/>
                    </div>
                    <hr/>
                    <div className="col-12 my-4">
                        <label htmlFor='main_img' className='fw-bold fs-2'>Main Image</label>
                        <input type='text' name='main_img' id='main_img' onChange={handleChange} className='w-100 rounded' placeholder='Title....'/>
                    </div>
                    <hr/>
                    <div className="col-12">
                        <h2 className='fw-bold'>Category</h2>
                        {
                            categories.map((ctgr)=>{ 
                                return <button type='button' className='btn btn-secondary mx-2' onClick={()=>addCategory(ctgr)}>{ctgr}</button>
                            })
                        }

                        {/* <button type='button' onClick={showData}>Submit</button> */}
                    </div>

                    <div className="col-12 py-3 mb-3">
                        {newInfo.category.length===0?<h2 className='text-secondary'>Choose Category....</h2>:
                        newInfo.category.map((ct, i)=>{
                            return <span className='border rounded bg-dark text-light p-2 pe-0'>
                                {ct}
                                <span className=' mx-2' role='button' onClick={()=>removeCategory(i)}>
                                    <TiDelete size={20} className='mb-1'/>
                                </span>
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
                    <div className="col-12 my-4 d-flex justify-content-center">
                        <button type='submit' className='btn btn-primary w-50'>Add</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </form>
    </>
  )
}

export default AddNews
