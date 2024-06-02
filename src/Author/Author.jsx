import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaRegNewspaper } from "react-icons/fa6";

const Author = () => {
  const {currentAuthor}=useSelector(store=>store.auth)
  const {news}=useSelector(store=>store.news)

  const newsByAuthor=news.filter((news)=>news.written_by===currentAuthor?.name)

  console.log(newsByAuthor)
  return (
    <>
      <div className="container-fluid">
        <div className="container">

            <div className="row">
                <div className="col-12 py-5">
                    <h2>Welcome {currentAuthor?.name}!</h2>
                </div>
            </div>

            <div className="row">
              <Link to={`/author/${currentAuthor?.name}`} className='nav-link'>
                <div className="col-lg-4 col-md-6 col-10 border rounded p-5 text-start bg-danger">
                  <FaRegNewspaper size={90} className='mb-1'/>
                  <h3 className='fw-bold'>News: {newsByAuthor.length}</h3>
                </div>
              </Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Author
