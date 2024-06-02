import React, { useEffect } from 'react'
import '../assets/css/home.css'
import TopNews from '../components/TopNews'
import { useDispatch, useSelector } from 'react-redux'
import SingleNews from '../components/SingleNews'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
// 1020784632c9491e915dfd5bb2b58530
const Home = () => {
  const dispatch=useDispatch()

  // ------------------

  const {news, isLoading}=useSelector(store=>store.news)
  const slicedNewsForLeft=news.slice(2,5)
  const slicedNewsForRight=news.slice(5,8)
  console.log(news)

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  if(isLoading) return (<Loading />)
  

  return (
    <>
      <div className="container-fluid">
        <div className="container-lg">

          <div className="row mt-4 m-auto">
            <div className="col-12 top-stories-text-box mt-3">
              <h2 className='text-center m-auto merriweather-bold-italic'>Top Stories</h2>            
            </div>
          </div>

          <div className="row px-lg-5  top-stories-box">
            <div className="col-lg-3 col-md-5 col-12">
              {
                slicedNewsForLeft.map((news, i)=>{
                  return(
                    <>
                    <div className="row text-start">
                      <div className="col-12">
                        <img src={news.main_img} className='w-100 p-0 m-0'/>
                      </div>

                      <div className="col-12">
                        {i==0?<h5><Link className='nav-link' to={`/news/${news.id}`}>{news.title}</Link></h5>:<h6><Link className='nav-link' to={`/news/${news.id}`}>{news.title}</Link></h6>}
                        <p><i>By <Link className='nav-link d-inline' to={`/authors/${news.written_by}`}>{news.written_by}</Link></i></p>
                      </div>
                    </div>

                    {i==slicedNewsForLeft.length-1?"":<hr/>}
                    </>
                  )
                })
              }
            </div>

            <div className="col-lg-6 col-md-7 col-12 order-first order-md-0">
              <div className="row">
                <div className="col-12 p-lg-0 top-stories-top-img overflow-hidden">
                  <img src={news[0]?.main_img} className='w-100 '/>
                </div>
                <div className="col-12">
                  <h2 className='mb-2 fw-bold' style={{fontSize:'35px'}}>
                    <Link className='nav-link mb-5' to={`/news/${news[0]?.id}`}>{news[0]?.title}</Link>
                  </h2>
                </div>
                <div className="col-12">
                  <p><i>By <Link className='nav-link d-inline' to={`/authors/${news[0]?.written_by}`}>{news[0]?.written_by}</Link></i></p>
                </div>
              </div>
              <hr className='top-stories-hr my-4'/>

              <div className="row my-2">
                <div className="col-8 text-start d-flex flex-column justify-content-between">
                  <h5 className='fw-bold'><Link className='nav-link' to={`/news/${news[1]?.id}`}>{news[1]?.title}</Link></h5>
                    <p><i>By <Link className='nav-link d-inline' to={`/authors/${news[1]?.written_by}`}>{news[1]?.written_by}</Link></i></p>
                  </div>
                  <div className="col-4">
                    <img src={news[1]?.main_img} className='w-100'/>
                  </div>
              </div>
                    
    
            </div>

            <div className="col-lg-3 col-12 d-flex flex-column flex-md-row flex-lg-column">
            {
                slicedNewsForRight.map((news, i)=>{
                  return(
                    <>
                    <div className="row text-start">
                      <div className="col-12">
                        <img src={news.main_img} className='w-100 p-0'/>
                      </div>

                      <div className="col-12">
                        {i==0?<h5><Link className='nav-link' to={`/news/${news.id}`}>{news.title}</Link></h5>:<h6><Link className='nav-link' to={`/news/${news.id}`}>{news.title}</Link></h6>}
                        <p><i>By <Link className='nav-link d-inline' to={`/news/${news.written_by}`}>{news.written_by}</Link></i></p>
                      </div>
                    </div>

                    {i==slicedNewsForLeft.length-1?"":<hr/>}
                    </>
                  )
                })
              }
            </div>
          </div>

          
        </div>
      </div>


      {/* ---------------- */}

      <div className="container-fluid"></div>

      {/* ---------------- */}

      <div className="container">
        <div className="row">

          <div className="col-lg-8 col-12">
              <div className="row">
                <div className="col-12 mt-5">
                  <h4 className='text-start the-latest-text fw-bold'><i>THE LATEST</i></h4>
                </div>
              </div>
            {
              news.map((latestNews)=>{
                return(
                  <>
                  <SingleNews news={latestNews}/>
                  </>
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Home
