import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getNewsByAuthor } from '../redux/newsSlice'

const NewsList = () => {
    const {name}=useParams()
    const dispatch=useDispatch()
    const {newsByAuthor}=useSelector(store=>store.news)
    const navigate=useNavigate()

    console.log(newsByAuthor)
    useEffect(()=>{
        dispatch(getNewsByAuthor(name))
    },[])
  return (
    <>
      <div className="container-fluid">
        <div className="container">

            <div className="row mt-5 ">
                <div className="col-8"></div>
                <div className="col-4">
                    <button className='btn btn-primary w-100' onClick={()=>navigate('/addnews')}>Add+</button>
                </div>
            </div>

            <div className="row mt-5">
                {newsByAuthor.map((news)=>{
                    return (
                        <div className="col-12 border rounded mb-2 shadow">
                            <div className="row py-3">
                                <div className="col-md-6 col-12 border-end">{news.title}</div>
                                <div className="col-md-2 col-6 border-end">{news.day}</div>
                                <div className="col-md-2 col-6">{news.time}</div>
                                <div className="col-md-2 col-12">
                                    <div className="row">
                                        <div className="col-lg-6 col-12"><Link className='btn btn-warning w-100'>Edit</Link></div>
                                        <div className="col-lg-6 cool-12"><button className='btn btn-danger w-100'>Delete</button></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
    </>
  )
}

export default NewsList
