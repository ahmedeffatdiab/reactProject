import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'
export const Navbar = ({searchByQuery}) => {
    const displayData=(word)=>{
        searchByQuery(word)
    }
  return (
    <div className='nav-style w-100'>
        <div className="container">
            <div className="row pt-2">
                <div className='col-xs-2 col-lg-1'>
                    <a href="/">
                        <img src={logo} className='logo rounded-circle'/>
                    </a>
                </div>
                <div className='col-xs-10 col-lg-11 d-flex align-items-center'>
                    <div className='search w-100'>
                        <i className='fa fa-search'></i>
                        <input onChange={(e)=>displayData(e.target.value)} type="text" className='form-control' placeholder='ابحث'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
