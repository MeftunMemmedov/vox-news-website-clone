import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPoliticNews, getSepcificNews } from '../redux/newsSlice'
import SingleNews from '../components/SingleNews'
import '../assets/css/politics.css'

const Science = () => {
    const {news}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Science'))

  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-6 m-auto my-2">
                <h2>SCIENCE</h2>
                <p>News and updates from the science team. Topics include genetics, infectious disease, psychology, and more.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-8">

                    {
                    specificNews.map((science)=>{
                        return(
                             <SingleNews news={science}/>   
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

export default Science