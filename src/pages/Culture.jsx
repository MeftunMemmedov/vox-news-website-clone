import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPoliticNews, getSepcificNews } from '../redux/newsSlice'
import SingleNews from '../components/SingleNews'
import '../assets/css/politics.css'

const Culture = () => {

    const dispatch=useDispatch()
    const {news}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Culture'))


  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-6 m-auto my-2">
                <h2>CULTURE</h2>
                <p>Stay up to date on the latest in television and movie reviews, books, celebrity culture, and more.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-8">

                    {
                    specificNews.map((cultureNews)=>{
                        return(
                             <SingleNews news={cultureNews}/>   
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

export default Culture