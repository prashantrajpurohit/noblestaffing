import React from "react";
import CounterOnScroll from "../counter/counter";

const WhyToChoose = () => {
  return (
    <div>
      <div className="why-choose-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="choose-fun-fact-item">
                <div className="row justify-content-center ">
                  <div className="col-lg-6 col-md-6">
                    <div className="choose-fun-fact mb-5 box-1">
                      <h3>What is the NDIS?</h3>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div
                      className="choose-fun-fact"
                      style={{ background: "#9be8d8" }}
                    >
                      <h3>OUR TEAM </h3>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div
                      className="choose-fun-fact"
                      style={{ background: "#e2f6ca" }}
                    >
                      <CounterOnScroll
                        startPoint={0}
                        endPoint={24}
                        delay={0}
                        duration={1}
                      />
                      <p style={{ fontSize: "30px" }}>Available Services</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-content">
                <h3>What Makes Us Unique</h3>
                <p>
                  We provide excellent participant services, giving you
                  reassurance that we are committed to maintaining the quality &
                  safety standards set by the NDIS and deliver the best NDIS
                  services.
                </p>
                <ul
                  className="info-list"
                  style={{
                    listStyle: "none",
                    fontSize: "20px",
                    lineHeight: "1.8",
                  }}
                >
                  <li>✔ 100% Australian Owned & Operated Company</li>
                  <li>✔ 24/7 Support</li>
                  <li>✔ Experience & Expertise</li>
                  <li>
                    ✔ We have a team of skilled & trained Disability support
                    workers, registered nurses, and enrolled nurses.
                  </li>
                  <li>✔ High-Quality Care</li>
                  <li>✔ Easy Process</li>
                  <li>✔ Individualised Care Plans</li>
                  <li>
                    ✔ With hundreds of Support Workers from Australia and around
                    the World, we can offer many languages and cultural
                    backgrounds
                  </li>
                </ul>

                <div className="why-choose-btn">
                  <a href="appointment.html" className="default-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="why-choose-shape-1"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="assets/images/why-choose/shape-1.png" alt="image" />
        </div>

        <div
          className="why-choose-shape-2"
          data-speed="0.08"
          data-revert="true"
        >
          <img src="assets/images/why-choose/shape-2.png" alt="image" />
        </div> */}
      </div>
      <div className="services-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>Our Services</span>
            <h2>We Offer Different Services To Improve Your Health</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/cardiology.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Cardiology</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/orthopedics.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Orthopedics</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/pulmonology.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Pulmonology</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/dental-care.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Dental Care</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/medicine.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Medicine</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/ambulance.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Ambulance</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/ophthalmology.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Ophthalmology</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-services-card">
                <div className="image">
                  <img src="assets/neurology.png" alt="image" />
                </div>

                <div className="content">
                  <h3>
                    <a href="services-details.html">Neurology</a>
                  </h3>
                  <p>
                    Proin gravida nibh vel velit auctor aliquet. Aenean
                    sollicitudin, lorem quis bibendum auctor.
                  </p>
                  <a href="services-details.html" className="services-btn">
                    Learn More
                  </a>
                </div>

                <div className="services-shape-1">
                  <img src="assets/shape-1.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyToChoose;
