import React, { useState } from 'react'
import { Menu, SubMenu, Item } from "burger-menu";
import { Link } from 'react-router-dom';
import 'burger-menu/lib/index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from 'react-redux';
import UserDropdown from './UserDropdown';


const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const {isLoggedIn, currentAuthor}=useSelector(store=>store.auth)



  return (
    <>
       <div onClick={() => setIsOpen(!isOpen)}><GiHamburgerMenu size={30}/></div>
      <Menu className="burger-menu" isOpen={isOpen} selectedKey={'entry'} onClose={() => setIsOpen(false)}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 fs-3 text-end">
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/politics'} onClick={()=>setIsOpen(false)}>Politics</Link>
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/culture'}  onClick={()=>setIsOpen(false)}>Culture</Link>
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/science'} onClick={()=>setIsOpen(false)}>Science</Link>
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/technology'} onClick={()=>setIsOpen(false)}>Technology</Link>
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/health'} onClick={()=>setIsOpen(false)}>Health</Link>
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/money'} onClick={()=>setIsOpen(false)}>Money</Link>
                    {
                                isLoggedIn? 
                                <UserDropdown isOpen={isOpen} setIsOpen={setIsOpen} currentAuthor={currentAuthor} />
                                :
                    <Link className='nav-link my-2 me-2 border-bottom' to={'/login'} onClick={()=>setIsOpen(false)}>Login</Link>
                    }
                </div>
            </div>
        </div>
      </Menu>
    </>
  )
}

export default BurgerMenu
