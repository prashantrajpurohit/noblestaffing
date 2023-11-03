import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";
const CounterOnScroll = () => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="choose-fun-fact">
        <h3>
          {counter && <CountUp start={0} end={100} delay={0} duration={1} />}
        </h3>
        <p>Patients Beds</p>
      </div>
    </ScrollTrigger>
  );
};

export default CounterOnScroll;
