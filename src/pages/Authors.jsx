import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import SingleNews from '../components/SingleNews'

const Authors = () => {
    const {name}=useParams()

    const {news}=useSelector(store=>store.news)

    const newsByAuhtor=news.filter((news)=>news.written_by == name)

    console.log(newsByAuhtor)
  return (
    <>
      <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-12">
                    <h2 className='text-start'>{name}</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mt-5">
                  <h4 className='text-start the-latest-text fw-bold'><i>News by {name}</i></h4>
                </div>
              </div>

            <div className="row">
                <div className="col-9">
                  <div className="row">
                  {
                newsByAuhtor.map((news)=>{
                    return(
                        <SingleNews news={news}/>
                    )
                })
                }
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Authors
