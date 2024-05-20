import React from 'react'
import { useSelector } from 'react-redux'
import SingleNews from '../components/SingleNews'

const Technology = () => {
    const {news}=useSelector(store=>store.news)

    const specificNews=news.filter((news)=>news.category.some((category)=>category=='Technology'))
  return (
    <>
      <div className="container-fluid">
        <div className="container my-5">

            <div className="row border-bottom border-5 my-4 politics-head-text-box">
                <div className="col-6 m-auto my-2">
                <h2>TECHNOLOGY</h2>
                <p>Uncovering and explaining how our digital world is changing — and changing us.</p>
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

export default Technology
