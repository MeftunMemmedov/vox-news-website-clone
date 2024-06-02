import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getNewsById } from '../redux/newsSlice'
import parse from 'html-react-parser'
import Loading from '../components/Loading'
import '../assets/css/news-details.css'

const NewsDetails = () => {
    const {id}=useParams()
    const {isLoading, news}=useSelector(store=>store.news)
    const {specificNews}=useSelector(store=>store.news)
    const dispatch=useDispatch()
    
    const getNews=specificNews[0]
    

    const recommendations=news.filter((news)=>news.category.some((sn)=>sn==getNews?.category[0]))

    console.log('recommendations',recommendations)

    useEffect(()=>{
      dispatch(getNewsById(id))
      window.scrollTo(0, 0);
    },[])
    if(isLoading) return (<Loading />)
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5 text-start">
          <div className="row">
            <div className="col-8">
              <div className="row">

                {
                getNews?.category.map((categories)=>{
                  return (
                    <div className="col-2 main-bg d-flex justify-content-center align-items-center pt-2 me-1 my-4">
                      <h6>{categories}</h6>
                    </div>
                  )
                })
                }


                <div className="col-12">
                  <h2>{getNews?.title}</h2>
                </div>

                <div className="col-12">
                <h6>By <Link className='nav-link d-inline' to={`/authors/${getNews?.written_by}`}> {getNews?.written_by}</Link></h6>
                  <p>{`${getNews?.day},${getNews?.time}`}</p>
                </div>

                <div className="col-12">
                  <img src={getNews?.main_img} className='w-100'/>
                </div>

                <div className="col-12 mt-5">
                  {parse(String(getNews?.description))}
                </div>
              </div>

              <div className="row">
                <div className="col-12 mt-5">
                  <h4 className='text-start recommendations-head-text fw-bold'><i>Recommendations</i></h4>
                </div>
              </div>

              <div className="row">
                {recommendations.map((news,i)=>{
                  return(
                    <div className="col-10 border-bottom my-2">
                      <h5><i>{i+1}. {news.title}</i></h5>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsDetails
