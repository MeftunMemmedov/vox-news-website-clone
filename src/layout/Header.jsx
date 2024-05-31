import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentAuthor, setIsLoggedIn } from '../redux/authSlice';
import SearchBar from '../components/SearchBar';
import UserDropdown from '../components/UserDropdown';


const Header = () => {
    const {isLoggedIn, currentAuthor, authors}=useSelector(store=>store.auth)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    // const currentAuthor=authors.find((author)=>author.id==currentAuthorId)

    console.log(currentAuthor)

   

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
                        <div className="col-6 p-0">
                            {
                                isLoggedIn? 
                                <UserDropdown currentAuthor={currentAuthor} />
                                :
                                <button 
                                className='w-100 border-0 rounded bg-button h-100 fw-bold text-light' 
                                onClick={()=>navigate('/login')}
                            >
                                Login
                            </button>
                            }
                        </div>
                        <div className="col-4 p-0">
                            <button 
                                className='w-100 border-0 rounded ' 
                                type="button" 
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseExample" 
                                aria-expanded="false" 
                                aria-controls="collapseExample"
                            >
                                <IoIosSearch/>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div className="collapse" id="collapseExample">
            <div className="card card-body">
                <div className="row">
                    <SearchBar />
                </div>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
