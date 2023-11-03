import React from "react";
import { Icon } from "@iconify/react";

const Body = () => {
  return (
    <div>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="main-banner-content-with-search"
                data-speed="0.06"
                data-revert="true"
              >
                <span
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  Thank you for choosing Noble Staffing Services!!
                </span>
                <p
                  data-aos="fade-right"
                  data-aos-delay="70"
                  data-aos-duration="700"
                >
                  We pride ourselves on being the reliable platform that
                  provides personalized and compassionate care services for
                  individuals with special needs. Our compassionate caretakers
                  are available 24/7 to offer you the well-versed support
                  services tailored to your specific needs
                </p>
                <p
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                >
                  Noble Staffing Services exists to provide outstanding
                  disability assistance, wherever it is needed. Whether you're
                  in need for mental health support, individual care or personal
                  life skill developmen We are your trusted platform for
                  availing individualised support and nursing care services .
                </p>

                <div
                  className="banner-bottom-text"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  <p>
                    We are your trusted platform for availing individualised
                    support and nursing care services
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="main-banner-image-with-doctor"
                data-speed="0.06"
                data-revert="true"
              >
                <img
                  src="assets/woman-doctorss.png"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  alt="doctor"
                />

                <div
                  className="circle-pattern"
                  data-aos="fade-down"
                  data-aos-delay="900"
                  data-aos-duration="900"
                ></div>

                <div
                  className="banner-image-shape-1"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  <img src="assets/banner-shape-1.png" alt="image" />
                </div>

                <div
                  className="banner-image-shape-2"
                  data-aos="fade-up"
                  data-aos-delay="70"
                  data-aos-duration="700"
                >
                  <img src="assets/banner-shape-2.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="easy-solutions-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Easy Solutions</span>
            <h2>4 Easy Step and Get the World Best Treatment</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-card">
                <div className="icon">
                  <i className="ri-user-search-line"></i>
                </div>
                <h3>
                  <a href="services-details.html">Check Doctor Profile</a>
                </h3>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin lorem quis bibendum auctor nisi elit.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-card">
                <div className="icon">
                  <i className="ri-git-pull-request-line"></i>
                </div>
                <h3>
                  <a href="services-details.html">Request Consulting</a>
                </h3>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin lorem quis bibendum auctor nisi elit.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-card">
                <div className="icon">
                  <i className="ri-calendar-check-line"></i>
                </div>
                <h3>
                  <a href="services-details.html">Receive Consulting</a>
                </h3>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin lorem quis bibendum auctor nisi elit.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-solutions-card">
                <div className="icon">
                  <i className="ri-check-double-line"></i>
                </div>
                <h3>
                  <a href="services-details.html">Get Your Solution</a>
                </h3>
                <p>
                  Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin lorem quis bibendum auctor nisi elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Body;
