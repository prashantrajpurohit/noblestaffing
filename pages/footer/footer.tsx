import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="widget-logo">
                  <img
                    src="assets/noble_logo.png"
                    className="white-logo"
                    alt="image"
                  />
                </div>

                <p>
                  We pride ourselves on being the reliable platform that
                  provides personalized and compassionate care services for
                  individuals with special needs. Our compassionate caretakers
                  are available 24/7 to offer you the well-versed support
                  services tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-5">
                <h3>Useful Link</h3>

                <ul className="quick-links">
                  <li>
                    <a href="about.html">About Us</a>
                  </li>
                  <li>
                    <a href="services.html">Medical Services</a>
                  </li>
                  <li>
                    <a href="doctors-1.html">Doctors</a>
                  </li>
                  <li>
                    <a href="faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="blog.html">News & Blog</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="appointment.html">Appointment</a>
                  </li>
                  <li>
                    <a href="services.html">Our Features</a>
                  </li>
                  <li>
                    <a href="services-details.html">Cardiology</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget">
                <h3>News & Blog</h3>

                <div className="footer-widget-blog">
                  <article className="item">
                    <a href="blog-details.html" className="thumb">
                      <span className="fullimage bg1" role="img"></span>
                    </a>
                    <div className="info">
                      <h4>
                        <a href="blog-details.html">
                          What You Need to Do When Preparing
                        </a>
                      </h4>
                      <span>
                        <a href="blog-right-sidebar.html">By Tianna Fuller</a>
                      </span>
                    </div>
                  </article>

                  <article className="item">
                    <a href="blog-details.html" className="thumb">
                      <span className="fullimage bg2" role="img"></span>
                    </a>
                    <div className="info">
                      <h4>
                        <a href="blog-details.html">
                          Diabetes Education Programs
                        </a>
                      </h4>
                      <span>
                        <a href="blog-right-sidebar.html">By Kendal Gay</a>
                      </span>
                    </div>
                  </article>

                  <article className="item">
                    <a href="blog-details.html" className="thumb">
                      <span className="fullimage bg3" role="img"></span>
                    </a>
                    <div className="info">
                      <h4>
                        <a href="blog-details.html">
                          Dental Hygiene for Everyone
                        </a>
                      </h4>
                      <span>
                        <a href="blog-right-sidebar.html">By Marie Jensen</a>
                      </span>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div className="single-footer-widget ps-3">
                <h3>Contact Information</h3>

                <ul className="footer-information">
                  <li>
                    <i className="ri-phone-fill"></i>
                    <h4>
                      <a href="tel:00123654878">+00 123 654 878</a>
                    </h4>
                    <span>Call Today</span>
                  </li>

                  <li>
                    <i className="ri-time-line"></i>
                    <h4>09:00 AM to 18:00 PM</h4>
                    <span>Open Hour</span>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i>
                    <h4>35 West Dental Street California 1004</h4>
                    <span>Our Location</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright @
                <script>document.write(new Date().getFullYear());</script>
                Medip All Rights Reserved by
                <a href="https://envytheme.com/" target="_blank">
                  {" "}
                  EnvyTheme{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="go-top">
        <i className="ri-arrow-up-s-line"></i>
      </div>
    </div>
  );
}

export default Footer;
