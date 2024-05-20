import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPoliticNews, getSepcificNews } from '../redux/newsSlice'
import SingleNews from '../components/SingleNews'
import '../assets/css/politics.css'

const Politics = () => {
    
    const {news}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Politics'))


  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-6 m-auto my-2">
                <h2>Politics</h2>
                <p>Vox's politics team explains everything you need to know about what's going on in Washington and what it means for your life.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-8">

                    {
                    specificNews.map((politicNews)=>{
                        return(
                             <SingleNews news={politicNews}/>   
                        )
                    })
                    }

                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Politics
