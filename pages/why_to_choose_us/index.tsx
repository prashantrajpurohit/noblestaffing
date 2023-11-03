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
                    <CounterOnScroll />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <CounterOnScroll />
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <CounterOnScroll />
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
    </div>
  );
};

export default WhyToChoose;
