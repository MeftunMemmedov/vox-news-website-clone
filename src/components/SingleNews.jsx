import React from 'react'
import { Link } from 'react-router-dom'

const SingleNews = ({news}) => {

  return (
    <>
      <div className="row my-3 single-news-container border-top overflow-hidden text-start">
        <div className="col-4 p-0">
            <img src={news.main_img} className=' w-100 h-100 object-fit-cover'/>
        </div>
        <div className="col-8">
            <Link to={`/news/${news.id}`} className='nav-link'><h5>{news.title}</h5></Link>
            <p className='text-secondary'>By <Link className='nav-link d-inline' to={`/authors/${news.written_by}`}>{news.written_by} | {news.day}</Link></p>
        </div>
      </div>
    </>
  )
}

export default SingleNews
