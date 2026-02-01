import HeroSection from "@/component/buttons/home/HeroSection";
import HowItWorks from "@/component/buttons/home/HowItWorks";
import ServicesSection from "@/component/buttons/home/Service";
import TestimonialsSection from "@/component/buttons/home/TestimonialsSection";
import WhyChooseUs from "@/component/buttons/home/WhyChooseUs";
import React from "react";

const Home = () => {
  return <div className="">
    <HeroSection/>
    <HowItWorks/>
    <WhyChooseUs/>
    <ServicesSection/>
    <TestimonialsSection/>
  </div>;
};

export default Home;
