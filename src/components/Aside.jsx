import React from 'react'
import image19 from '../img/bg-img/19.jpg'
import image20 from '../img/bg-img/20.jpg'
import image21 from '../img/bg-img/21.jpg'
import image22 from '../img/bg-img/22.jpg'
import image23 from '../img/bg-img/23.jpg'
import image24 from '../img/bg-img/24.jpg'

export const Aside = () => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image19} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Finance</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Pellentesque mattis arcu massa, nec fringilla turpis
                      eleifend id.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image20} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Politics</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Sed a elit euismod augue semper congue sit amet ac sapien.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image21} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Health</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Pellentesque mattis arcu massa, nec fringilla turpis
                      eleifend id.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image22} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Finance</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Augue semper congue sit amet ac sapien. Fusce consequat.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image23} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Travel</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Pellentesque mattis arcu massa, nec fringilla turpis
                      eleifend id.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="single-blog-post small-featured-post d-flex">
              <div className="post-thumb">
                <a href="#"><img src={image24} alt="" /></a>
              </div>
              <div className="post-data">
                <a href="#" className="post-catagory">Politics</a>
                <div className="post-meta">
                  <a href="#" className="post-title">
                    <h6>
                      Augue semper congue sit amet ac sapien. Fusce consequat.
                    </h6>
                  </a>
                  <p className="post-date">
                    <span>7:00 AM</span> | <span>April 14</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}



export const Aside2 = () => {
  return (
    <div className="col-12 col-lg-4">
            <div className="section-heading">
              <h6>Info</h6>
            </div>

            <div className="popular-news-widget mb-30">
              <h3>4 Most Popular News</h3>

              <div className="single-popular-post">
                <a href="#">
                  <h6>
                    <span>1.</span> Amet, consectetur adipiscing elit. Nam eu
                    metus sit amet odio sodales.
                  </h6>
                </a>
                <p>April 14, 2018</p>
              </div>

              <div className="single-popular-post">
                <a href="#">
                  <h6>
                    <span>2.</span> Consectetur adipiscing elit. Nam eu metus
                    sit amet odio sodales placer.
                  </h6>
                </a>
                <p>April 14, 2018</p>
              </div>

              <div className="single-popular-post">
                <a href="#">
                  <h6>
                    <span>3.</span> Adipiscing elit. Nam eu metus sit amet odio
                    sodales placer. Sed varius leo.
                  </h6>
                </a>
                <p>April 14, 2018</p>
              </div>

              <div className="single-popular-post">
                <a href="#">
                  <h6>
                    <span>4.</span> Eu metus sit amet odio sodales placer. Sed
                    varius leo ac...
                  </h6>
                </a>
                <p>April 14, 2018</p>
              </div>
            </div>

            <div className="newsletter-widget">
              <h4>Newsletter</h4>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </p>
              <form action="#" method="post">
                <input type="text" name="text" placeholder="Name" />
                <input type="email" name="email" placeholder="Email" />
                <button type="submit" className="btn w-100">Subscribe</button>
              </form>
            </div>
          </div>
  )
}
