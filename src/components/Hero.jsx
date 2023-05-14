import React from 'react'
import './Head.jsx'
import './Footer.jsx'
import image from '../img/bg-img/hero-add.gif'

export const Hero = () => {
  return (
    <div className="hero-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-8">
            <div className="breaking-news-area d-flex align-items-center">
              <div className="news-title">
                <p>Breaking News</p>
              </div>
              <div id="breakingNewsTicker" className="ticker">
                <ul>
                  <li>
                    <a href="#"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</a
                    >
                  </li>
                  <li><a href="#">Welcome to Colorlib Family.</a></li>
                  <li><a href="#">Nam eu metus sitsit amet, consec!</a></li>
                </ul>
              </div>
            </div>

            <div className="breaking-news-area d-flex align-items-center mt-15">
              <div className="news-title title2">
                <p>International</p>
              </div>
              <div id="internationalTicker" className="ticker">
                <ul>
                  <li>
                    <a href="#"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.</a
                    >
                  </li>
                  <li><a href="#">Welcome to Colorlib Family.</a></li>
                  <li><a href="#">Nam eu metus sitsit amet, consec!</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="hero-add">
              <a href="#"><img src={image} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
