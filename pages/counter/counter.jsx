import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";
const CounterOnScroll = ({ startPoint, endPoint, delay, duration }) => {
  const [counter, setCounter] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <h3>
        {counter && (
          <CountUp
            start={startPoint}
            end={endPoint}
            delay={delay}
            duration={duration}
          />
        )}
      </h3>
    </ScrollTrigger>
  );
};

export default CounterOnScroll;
