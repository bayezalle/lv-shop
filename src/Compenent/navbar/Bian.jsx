import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../Assets/logo1.jpeg"


const Bian = () => {
  return (
    <>
    <div className="container">
    <nav className='navbar navbar-expand-lg'>
        <div className=""><img src={logo} className="img-fluid" width={90} alt="" /></div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto gap-3 mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            International
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <div className=" d-flex justify-content-center align-items-center">
            <a class="nav-link active" aria-current="page" href="#">Registe</a>
            <FaUser />
          </div>
        </li>
        <li class="nav-item">
        <div className="d-flex justify-content-center align-items-center">
            <a class="nav-link active" aria-current="page" href="#">Panier</a>
            <FaCartShopping />
          </div>
        </li>
      </ul>
    </div>
            </nav>
        </div>
    </>
  )
}

export default Bian
