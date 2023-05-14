import React from 'react'
import './Head.jsx'
import './Footer.jsx'
import image1 from '../img/bg-img/16.jpg'
import image2 from '../img/bg-img/17.jpg'
import image3 from '../img/bg-img/18.jpg'
import image4 from '../img/bg-img/12.jpg'
import image5 from '../img/bg-img/13.jpg'
import image6 from '../img/bg-img/14.jpg'
import image7 from '../img/bg-img/15.jpg'
import imageCore1 from '../img/core-img/like.png'
import imageCore2 from '../img/core-img/chat.png'
import { Aside, Aside2 } from './Aside.jsx'


export const Articles = () => {
  return (
    <>
    <div className="featured-post-area">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8">
            <div className="row">
              <div className="col-12 col-lg-7">
                <div className="single-blog-post featured-post">
                  <div className="post-thumb">
                    <a href="#"><img src={image1} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>
                        Financial news: A new company is born today at the stock
                        market
                      </h6>
                    </a>
                    <div className="post-meta">
                      <p className="post-author">
                        By <a href="#">Christinne Williams</a>
                      </p>
                      <p className="post-excerp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam eu metus sit amet odio sodales placerat. Sed varius
                        leo ac leo fermentum, eu cursus nunc maximus. Integer
                        convallis nisi nibh, et ornare neque ullamcorper ac. Nam
                        id congue lectus, a venenatis massa. Maecenas justo
                        libero, vulputate vel nunc id, blandit feugiat sem.
                      </p>

                      <div className="d-flex align-items-center">
                        <a href="#" className="post-like"
                          ><img src={imageCore1} alt="" />
                          <span>392</span></a
                        >
                        <a href="#" className="post-comment"
                          ><img src={imageCore2} alt="" />
                          <span>10</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-5">
                <div className="single-blog-post featured-post-2">
                  <div className="post-thumb">
                    <a href="#"><img src={image2} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu metus sit amet odio sodales placerat. Sed
                          varius leo ac...
                        </h6>
                      </a>

                      <div className="d-flex align-items-center">
                        <a href="#" className="post-like"
                          ><img src={imageCore1} alt="" />
                          <span>392</span></a
                        >
                        <a href="#" className="post-comment"
                          ><img src={imageCore2} alt="" />
                          <span>10</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>

                <div className="single-blog-post featured-post-2">
                  <div className="post-thumb">
                    <a href="#"><img src={image3} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <div className="post-meta">
                      <a href="#" className="post-title">
                        <h6>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam eu metus sit amet odio sodales placerat. Sed
                          varius leo ac...
                        </h6>
                      </a>

                      <div className="d-flex align-items-center">
                        <a href="#" className="post-like"
                          ><img src={imageCore1} alt="" />
                          <span>392</span></a
                        >
                        <a href="#" className="post-comment"
                          ><img src={imageCore2} alt="" />
                          <span>10</span></a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Aside />
        </div>
      </div>

      <div className="popular-news-area section-padding-80-50">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="section-heading">
              <h6>Popular News</h6>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="single-blog-post style-3">
                  <div className="post-thumb">
                    <a href="#"><img src={image4} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>
                        Dolor sit amet, consectetur adipiscing elit. Nam eu
                        metus sit amet odio sodales placer. Sed varius leo ac...
                      </h6>
                    </a>
                    <div className="post-meta d-flex align-items-center">
                      <a href="#" className="post-like"
                        ><img src={imageCore1} alt="" />
                        <span>392</span></a
                      >
                      <a href="#" className="post-comment"
                        ><img src={imageCore2} alt="" />
                        <span>10</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="single-blog-post style-3">
                  <div className="post-thumb">
                    <a href="#"><img src={image5} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>
                        Dolor sit amet, consectetur adipiscing elit. Nam eu
                        metus sit amet odio sodales placer. Sed varius leo ac...
                      </h6>
                    </a>
                    <div className="post-meta d-flex align-items-center">
                      <a href="#" className="post-like"
                        ><img src={imageCore1} alt="" />
                        <span>392</span></a
                      >
                      <a href="#" className="post-comment"
                        ><img src={imageCore2} alt="" />
                        <span>10</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="single-blog-post style-3">
                  <div className="post-thumb">
                    <a href="#"><img src={image6} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>
                        Dolor sit amet, consectetur adipiscing elit. Nam eu
                        metus sit amet odio sodales placer. Sed varius leo ac...
                      </h6>
                    </a>
                    <div className="post-meta d-flex align-items-center">
                      <a href="#" className="post-like"
                        ><img src={imageCore1} alt="" />
                        <span>392</span></a
                      >
                      <a href="#" className="post-comment"
                        ><img src={imageCore2} alt="" />
                        <span>10</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="single-blog-post style-3">
                  <div className="post-thumb">
                    <a href="#"><img src={image7} alt="" /></a>
                  </div>
                  <div className="post-data">
                    <a href="#" className="post-catagory">Finance</a>
                    <a href="#" className="post-title">
                      <h6>
                        Dolor sit amet, consectetur adipiscing elit. Nam eu
                        metus sit amet odio sodales placer. Sed varius leo ac...
                      </h6>
                    </a>
                    <div className="post-meta d-flex align-items-center">
                      <a href="#" className="post-like"
                        ><img src={imageCore1} alt="" />
                        <span>392</span></a
                      >
                      <a href="#" className="post-comment"
                        ><img src={imageCore2} alt="" />
                        <span>10</span></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Aside2 />
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
