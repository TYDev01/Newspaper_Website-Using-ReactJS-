import React from 'react'
import './Head.jsx'
import './Footer.jsx'

export const Navbar = () => {
  return (
        <div className="newspaper-main-menu" id="stickyMenu">
         <div className="classNamey-nav-container breakpoint-off">
          <div className="container">
            <nav
              className="classNamey-navbar justify-content-between"
              id="newspaperNav"
            >
              <div className="logo">
                <a href="index-2.html"
                  ><img src="img/core-img/logo.png" alt=""
                /></a>
              </div>

              <div className="classNamey-navbar-toggler">
                <span className="navbarToggler"
                  ><span></span><span></span><span></span
                ></span>
              </div>

              <div className="classNamey-menu">
                <div className="classNameycloseIcon">
                  <div className="cross-wrap">
                    <span className="top"></span><span className="bottom"></span>
                  </div>
                </div>

                <div className="classynav">
                  <ul>
                    <li className="active"><a href="index-2.html">Home</a></li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="dropdown">
                        <li><a href="index-2.html">Home</a></li>
                        <li><a href="catagories-post.html">Catagories</a></li>
                        <li><a href="single-post.html">Single Articles</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                        <li>
                          <a href="#">Dropdown</a>
                          <ul className="dropdown">
                            <li><a href="index-2.html">Home</a></li>
                            <li>
                              <a href="catagories-post.html">Catagories</a>
                            </li>
                            <li>
                              <a href="single-post.html">Single Articles</a>
                            </li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mega Menu</a>
                      <div className="megamenu">
                        <ul className="single-mega cn-col-4">
                          <li className="title">Catagories</li>
                          <li><a href="index-2.html">Home</a></li>
                          <li><a href="catagories-post.html">Catagories</a></li>
                          <li>
                            <a href="single-post.html">Single Articles</a>
                          </li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Catagories</li>
                          <li><a href="index-2.html">Home</a></li>
                          <li><a href="catagories-post.html">Catagories</a></li>
                          <li>
                            <a href="single-post.html">Single Articles</a>
                          </li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <ul className="single-mega cn-col-4">
                          <li className="title">Catagories</li>
                          <li><a href="index-2.html">Home</a></li>
                          <li><a href="catagories-post.html">Catagories</a></li>
                          <li>
                            <a href="single-post.html">Single Articles</a>
                          </li>
                          <li><a href="about.html">About Us</a></li>
                          <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <div className="single-mega cn-col-4">
                          <div
                            className="single-blog-post small-featured-post d-flex"
                          >
                            <div className="post-thumb">
                              <a href="#"
                                ><img src="img/bg-img/23.jpg" alt=""
                              /></a>
                            </div>
                            <div className="post-data">
                              <a href="#" className="post-catagory">Travel</a>
                              <div className="post-meta">
                                <a href="#" className="post-title">
                                  <h6>
                                    Pellentesque mattis arcu massa, nec
                                    fringilla turpis eleifend id.
                                  </h6>
                                </a>
                                <p className="post-date">
                                  <span>7:00 AM</span> | <span>April 14</span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            className="single-blog-post small-featured-post d-flex"
                          >
                            <div className="post-thumb">
                              <a href="#"
                                ><img src="img/bg-img/24.jpg" alt=""
                              /></a>
                            </div>
                            <div className="post-data">
                              <a href="#" className="post-catagory">Politics</a>
                              <div className="post-meta">
                                <a href="#" className="post-title">
                                  <h6>
                                    Augue semper congue sit amet ac sapien.
                                    Fusce consequat.
                                  </h6>
                                </a>
                                <p className="post-date">
                                  <span>7:00 AM</span> | <span>April 14</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Breaking News</a></li>
                    <li><a href="#">Business</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Health</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
  )
}
