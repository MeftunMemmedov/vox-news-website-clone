import React from 'react'
import '../assets/css/home.css'
import TopNews from '../components/TopNews'
import { useDispatch, useSelector } from 'react-redux'
import SingleNews from '../components/SingleNews'

const Home = () => {
  const dispatch=useDispatch()

  // ------------------

  const {news}=useSelector(store=>store.news)
  const slicedNewsForLeft=news.slice(2,5)
  const slicedNewsForRight=news.slice(5,8)
  console.log(news)
  return (
    <>
      <div className="container-fluid">
        <div className="container">

          <div className="row mt-4 m-auto">
            <div className="col-12 top-stories-text-box mt-3">
              <h2 className='text-center m-auto fw-bold'><i>Top Stories</i></h2>            
            </div>
          </div>

          <div className="row px-5 top-stories-box">
            <div className="col-3 ">
              {
                slicedNewsForLeft.map((news, i)=>{
                  return(
                    <>
                    <div className="row text-start">
                      <div className="col-12">
                        <img src={news.main_img} className='w-100'/>
                      </div>

                      <div className="col-12">
                        {i==0?<h5>{news.title}</h5>:<h6>{news.title}</h6>}
                        <p><i>By {news.written_by}</i></p>
                      </div>
                    </div>

                    {i==slicedNewsForLeft.length-1?"":<hr/>}
                    </>
                  )
                })
              }
            </div>

            <div className="col-6">
              <div className="row">
                <div className="col-12 p-0 top-stories-top-img overflow-hidden">
                  <img src={news[0]?.main_img} className='w-100 p-0'/>
                </div>
                <div className="col-12">
                  <h2 className='mb-2 fw-bold' style={{fontSize:'40px'}}>{news[0]?.title}</h2>
                </div>
                <div className="col-12">
                  <p><i>By {news[0]?.written_by}</i></p>
                </div>
              </div>
              <hr className='top-stories-hr my-4'/>

              <div className="row my-2">
                <div className="col-8 text-start d-flex flex-column justify-content-between">
                  <h5 className='fw-bold'>{news[1]?.title}</h5>
                    <p><i>By {news[1]?.written_by}</i></p>
                  </div>
                  <div className="col-4">
                    <img src={news[1]?.main_img} className='w-100'/>
                  </div>
              </div>
                    
    
            </div>

            <div className="col-3 ">
            {
                slicedNewsForRight.map((news, i)=>{
                  return(
                    <>
                    <div className="row text-start">
                      <div className="col-12">
                        <img src={news.main_img} className='w-100'/>
                      </div>

                      <div className="col-12">
                        {i==0?<h5>{news.title}</h5>:<h6>{news.title}</h6>}
                        <p><i>By {news.written_by}</i></p>
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

          <div className="col-8">
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
