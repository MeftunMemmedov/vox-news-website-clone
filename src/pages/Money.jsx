import React from 'react'
import SingleNews from '../components/SingleNews'
import { useSelector } from 'react-redux'

const Money = () => {
    const {news}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Money'))
  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-6 m-auto my-2">
                <h2>MONEY</h2>
                <p>How we make and spend money, and how economics influences the world around us.</p>
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

export default Money
