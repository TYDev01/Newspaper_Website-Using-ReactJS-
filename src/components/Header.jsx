import React from 'react'
import './Head.jsx'
import images from '../img/core-img/logo.png'
import { Navbar } from './Navbar'


export const Header = () => {
  return (
    <header className="header-area">
      <div className="top-header-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="top-header-content d-flex align-items-center justify-content-between"
              >
                <div className="logo">
                  <a href="index-2.html"
                    ><img src={images} alt=""
                  /></a>
                </div>

                <div className="login-search-area d-flex align-items-center">
                  <div className="login d-flex">
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                  </div>

                  <div className="search-form">
                    <form action="#" method="post">
                      <input
                        type="search"
                        name="search"
                        className="form-control"
                        placeholder="Search"
                      />
                      <button type="submit">
                        <i className="fa fa-search" aria-hidden="true"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Navbar />
    </header>
  )
}
