import React from "react";
import Navbar from "./navbar";
import Body from "./main_banner/main_banner";
import WhyToChoose from "./why_to_choose_us";
import Footer from "./footer/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Body />
      <WhyToChoose />
      <Footer />
    </>
  );
}
export default Home;
