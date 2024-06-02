import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-12 border d-flex justify-content-center align-items-center" style={{height:"100vh"}} >
            <div class="spinner-border" style={{width:'10rem', height:'10rem'}}  role="status">
                <span class="visually-hidden ">Loading...</span>
            </div>
            
            </div>
            <h2>Loading...</h2>
        </div>
      </div>
    </>
  )
}

export default Loading
