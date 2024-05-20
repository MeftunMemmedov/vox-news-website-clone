import React from 'react'

const SingleNews = ({news}) => {

  return (
    <>
      <div className="row my-3 single-news-container border-top overflow-hidden text-start" style={{height:'150px'}}>
        <div className="col-4 p-0">
            <img src={news.main_img} className=' w-100 h-100 object-fit-center'/>
        </div>
        <div className="col-8">
            <h5>{news.title}</h5>
            <p className='text-secondary'>By {news.written_by} | {news.day}</p>
        </div>
      </div>
    </>
  )
}

export default SingleNews
