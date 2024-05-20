import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";


const Header = () => {
  return (
    <>
      <header className='bg-md-light border text-secondary'>
        <div className="container-lg container-fluid h-100">
            <div className="row h-100">

                <div className="col-2 position-relative playball-regular">
                    
                    <div className='w-75 header-logo-box position-absolute bg-main  d-flex justify-content-center align-items-center'>
                        <Link className='nav-link' to={'/'}><h1 className='fw-bold'>Vox</h1></Link>
                    </div>    
                    
                </div>
                <div className="col-md-7 col-4">
                    <nav className='d-md-flex d-none justify-content-around align-items-center h-100 fw-bold'>
                        <Link className='nav-link' to={'/politics'}>Politics</Link>
                        <Link className='nav-link' to={'/culture'}>Culture</Link>
                        <Link className='nav-link' to={'/science'}>Science</Link>
                        <Link className='nav-link' to={'/technology'}>Technology</Link>
                        <Link className='nav-link' to={'/health'}>Health</Link>
                        <Link className='nav-link' to={'/money'}>Money</Link>
                    </nav>
                </div>
                <div className="col-md-3 col-6 d-flex justify-content-around align-items-center m-0">

                    <div className="row w-100 d-flex justify-content-between">
                        <div className="col-6 p-0"><button className='w-100 border-0 rounded bg-button h-100 fw-bold text-light'>Give</button></div>
                        <div className="col-4 p-0"><button className='w-100 border-0 rounded ' type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><IoIosSearch/></button></div>
                    </div>

                </div>

            </div>
        </div>

        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div className="row">
                    <div className="col-lg-10 col-8 d-flex justify-content-end">
                        <input type="text" className='w-75 border-0 border-bottom search-input'/>
                    </div>
                    <div className="col-lg-2 col-4">
                        <button className='w-50 btn btn-dark '><IoIosSearch/></button>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
