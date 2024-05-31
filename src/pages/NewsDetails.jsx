import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getNewsById } from '../redux/newsSlice'
import parse from 'html-react-parser'

const NewsDetails = () => {
    const {id}=useParams()
    const {specificNews}=useSelector(store=>store.news)
    const dispatch=useDispatch()
    
    const getNews=specificNews[0]

    useEffect(()=>{
      dispatch(getNewsById(id))
    },[])
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5 text-start">
          <div className="row">
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                {
                getNews?.category.map((categories)=>{
                  return (
                    `${categories} ${getNews.category.length>1?"/":''}`
                  )
                })
                }
                </div>

                <div className="col-12">
                  <h2>{getNews?.title}</h2>
                </div>

                <div className="col-12">
                <h6>By <Link to={`/authors/${getNews?.written_by}`}> {getNews?.written_by}</Link></h6>
                  <p>{`${getNews?.day},${getNews?.time}`}</p>
                </div>

                <div className="col-12">
                  <img src={getNews?.main_img} className='w-100'/>
                </div>

                <div className="col-12 mt-5">
                  {parse(String(getNews?.description))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetails
