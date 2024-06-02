import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useSelector } from 'react-redux';
const SearchBar = () => {
    const [searchInput, setSearchInput]=useState('')


  return (
    <>
    <div className="col-lg-10 col-8 d-flex justify-content-end">
        <input 
        type="search" 
        name='search' 
        placeholder='Not Working Yet....('
        className='w-75 border-0 border-bottom search-input'
        onChange={(e)=>setSearchInput(e.target.value)}
        />
    </div>
    <div className="col-lg-2 col-4">
        <button className='w-50 btn btn-dark '><IoIosSearch/></button>
    </div>
                   
    </>
  )
}

export default SearchBar
