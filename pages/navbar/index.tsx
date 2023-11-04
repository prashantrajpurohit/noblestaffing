import React from "react";
const Navbar = () => {
  return (
    <div>
      <div className="navbar-area fixed-top is-sticky ">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img
                    src="/assets/noble_logo.png"
                    className="black-logo"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img
                  src="assets/noble_logo.png"
                  className="white-logo"
                  alt="image"
                  width="150px"
                />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <a href="#" className="nav-link active">
                      Home
                      <i className="ri-arrow-down-s-line"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link active">
                          Home Demo - 1
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">
                          Home Demo - 2
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="index-3.html" className="nav-link">
                          Home Demo - 3
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="index-4.html" className="nav-link">
                          Home Demo - 4
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="about.html" className="nav-link">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Services
                      <i className="ri-arrow-down-s-line"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="services.html" className="nav-link">
                          Services
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="services-details.html" className="nav-link">
                          Services Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Doctors
                      <i className="ri-arrow-down-s-line"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="doctors-1.html" className="nav-link">
                          Doctors One
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="doctors-2.html" className="nav-link">
                          Doctors Two
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="doctors-details.html" className="nav-link">
                          Doctors Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="ri-arrow-down-s-line"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Portfolio
                          <i className="ri-arrow-right-s-line"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="portfolio.html" className="nav-link">
                              Portfolio
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              href="portfolio-details.html"
                              className="nav-link"
                            >
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="pricing.html" className="nav-link">
                          Pricing
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="gallery.html" className="nav-link">
                          Gallery
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="appointment.html" className="nav-link">
                          Appointment
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="timetable.html" className="nav-link">
                          Timetable
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="process.html" className="nav-link">
                          Process
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="working-hours.html" className="nav-link">
                          Working Hours
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="faq.html" className="nav-link">
                          FAQ
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="testimonials.html" className="nav-link">
                          Testimonials
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Shop
                          <i className="ri-arrow-right-s-line"></i>
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="products.html" className="nav-link">
                              Products
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="cart.html" className="nav-link">
                              Cart
                            </a>
                          </li>

                          <li className="nav-item">
                            <a href="checkout.html" className="nav-link">
                              Checkout
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              href="products-details.html"
                              className="nav-link"
                            >
                              Products Details
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a
                          href="profile-authentication.html"
                          className="nav-link"
                        >
                          Profile Authentication
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="terms-of-service.html" className="nav-link">
                          Terms of Service
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="privacy-policy.html" className="nav-link">
                          Privacy Policy
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="error-404.html" className="nav-link">
                          404 Error
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="coming-soon.html" className="nav-link">
                          Coming Soon
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Blog
                      <i className="ri-arrow-down-s-line"></i>
                    </a>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="blog.html" className="nav-link">
                          Blog
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="blog-right-sidebar.html" className="nav-link">
                          Blog Right Sidebar
                        </a>
                      </li>

                      <li className="nav-item">
                        <a href="blog-details.html" className="nav-link">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <a href="contact.html" className="nav-link">
                      Contact
                    </a>
                  </li>
                </ul>

                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="call-info">
                      <i className="ri-phone-line"></i>
                      <a href="tel:00123654878">+00 123 654 878</a>
                    </div>
                  </div>

                  <div className="option-item">
                    <a href="appointment.html" className="default-btn">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div className="container">
            <div className="dot-menu">
              <div className="inner">
                <div className="circle circle-one"></div>
                <div className="circle circle-two"></div>
                <div className="circle circle-three"></div>
              </div>
            </div>

            <div className="container">
              <div className="option-inner">
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <div className="call-info">
                      <i className="ri-phone-line"></i>
                      <a href="tel:00123654878">+00 123 654 878</a>
                    </div>
                  </div>

                  <div className="option-item">
                    <a href="appointment.html" className="default-btn">
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
