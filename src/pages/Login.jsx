import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthors, setCurrentAuthor, setCurrentAuthorId, setIsLoggedIn } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const {authors, isLoggedIn, currentAuthor}=useSelector(store=>store.auth)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    

    const [authorsInput,setAuthorsInput]=useState({
        email:'',
        password:''
    })



    const handleChange=(e)=>{
        setAuthorsInput(prevState=>{
            return {...prevState, [e.target.name]:e.target.value}
        })
    }

    const handelSubmit=(e)=>{
        e.preventDefault()
        if(authors.some((author)=>author.email==authorsInput.email && author.password==authorsInput.password)){
            let authorInfo=authors.find((author)=>author.email==authorsInput.email)
            localStorage.setItem('authorId', authorInfo.id)
            dispatch(setIsLoggedIn())
            navigate('/')
            // dispatch(setCurrentAuthor(authorInfo))
        } else {
            alert("Something is wrong")
        }
    }

    console.log(currentAuthor)

    useEffect(()=>{
        dispatch(getAuthors())
        window.scrollTo(0,0)
    },[])
  return (
    <>
      <div className="container-fluid">
        <div className="container">
            <div className="row py-5">
                <div className="col-lg-6 col-md-8 col-sm-12 m-auto mt-5">
                    <form onSubmit={handelSubmit}>
                        <div className="row">
                            <div className="col-12 mt-3">                                
                                <div className="row">
                                    <div className="col-2"><label htmlFor='email' className=''>Email</label></div>
                                    <div className="col-10"><input type="email" name='email' id='email' className=' w-100' onChange={handleChange}/></div>
                                </div>
                            </div>

                            {/* <div className="col-12 mt-3">
                                <div className="row">
                                    <div className="col-2"><label htmlFor='name'>Name</label></div>
                                    <div className="col-10"><input type="text" name='name' id='name' className=' w-100' onChange={handleChange}/></div>
                                </div>
                            </div> */}
                            
                            <div className="col-12 my-3">
                                <div className="row">
                                    <div className="col-2"><label htmlFor='password'  className=''>Password</label></div>
                                    <div className="col-10"><input type="password" name='password' id='password' className=' w-100' onChange={handleChange}/></div>
                                </div>
                            </div>
                            
                            <button type='submit' className='btn btn-dark'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login
