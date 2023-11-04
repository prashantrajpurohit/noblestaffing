import { Icon } from "@iconify/react";
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
                    width={200}
                  />
                </div>
                <br />
                <p>
                  We pride ourselves on being the reliable platform that
                  provides personalized and compassionate care services for
                  individuals with special needs. Our compassionate caretakers
                  are available 24/7 to offer you the well-versed support
                  services tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 p-4">
              <div className="single-footer-widget ">
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

            <div className="col-lg-3 col-sm-6 p-4">
              <div className="single-footer-widget">
                <h3>Services</h3>
                <ul className="quick-links">
                  <li>
                    <a> Assistance with daily life</a>
                  </li>
                  <li>
                    <a>Community Nursing Care</a>
                  </li>
                  <li>
                    <a>Assistance with Social and Community Services</a>
                  </li>
                  <li>
                    <a>Domestic Care and Cleaning</a>
                  </li>
                  <li>
                    <a>Companionship and Community Access</a>
                  </li>
                  <li>
                    <a>High Intensity Daily Living</a>
                  </li>
                  <li>
                    <a>Travel and Transportation</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6 ">
              <div className="single-footer-widget ps-3">
                <h3>Contact Information</h3>

                <ul className="footer-information ">
                  <li>
                    <div className="d-flex">
                      <Icon
                        icon="mdi:telephone"
                        color="blue"
                        width="38.1"
                        height="38.33"
                      />
                      <h4>
                        <a href="tel:0493525749">0493525749</a>
                      </h4>
                    </div>
                    <span className="p-5">Call Today</span>
                  </li>

                  <li>
                    <div className="d-flex">
                      <Icon
                        icon="iconamoon:clock-fill"
                        color="blue"
                        width="38"
                        height="38"
                      />
                      <h4>24/7</h4>
                    </div>
                    <span className="p-5">Open Hour</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <abbr>
            <span>
              <img src="/assets/flags.png" />
            </span>
            <br />
            <a style={{ textDecoration: "none" }}>
              <strong> Noble Staffing Services Pty Ltd. </strong>
            </a>
            believe that diversity, equity and inclusion are at the core of who
            we are. We embrace everyone regardless of age, gender identity,
            race, sexual orientation, physical or mental ability or ethnicity.
            Our commitment to these values is unwavering. Further, we recognise
            the objectives of the Convention on the Rights of Persons with
            Disabilities. We also acknowledge the traditional custodians of
            country throughout Australia, and their continuing connection to
            land, sea and community. We pay our respects to them and their
            cultures, and to elders past and present. We are committed to
            collaboration that furthers self-determination and creates a better
            future for all.
          </abbr>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="copyright-area-content">
              <p>
                Copyright @ 2023 All Rights Reserved by
                <a
                  target="_blank"
                  style={{ textDecoration: "none", marginLeft: 4 }}
                >
                  Noble Staffing Services
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
