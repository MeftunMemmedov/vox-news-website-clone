import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsLoggedIn } from '../redux/authSlice'
import { Link, useNavigate } from 'react-router-dom'

const UserDropdown = ({currentAuthor}) => {
    const dispatch=useDispatch()
    const navigate=useNavigate()


    const logOut=()=>{
        dispatch(setIsLoggedIn())
        localStorage.removeItem('authorId')
    }
  return (
    <>
    <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
           {currentAuthor?.name}
        </button>
        <ul className="dropdown-menu px-2">
            <li className='mb-2'><Link to={'/author'} className='btn btn-primary w-100'>Dashboard</Link></li>
            <li><button onClick={logOut} className='btn btn-danger w-100'>Log Out</button></li>
        </ul>
    </div>

    </>
  )
}

export default UserDropdown
