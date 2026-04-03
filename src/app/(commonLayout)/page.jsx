import HeroBanner from "@/component/buttons/home/HeroBanner";
import HowItWorks from "@/component/buttons/home/HowItWorks";
import ServicesSection from "@/component/buttons/home/Service";
import TestimonialsSection from "@/component/buttons/home/TestimonialsSection";
import WhyChooseUs from "@/component/buttons/home/WhyChooseUs";
import React from "react";

export const metadata = {
  title: "Care Haven | Baby Sitting, Sick Patient Care & Elderly Care Services",
  description:
    "Book trusted baby sitting, elderly care, and patient care services in Bangladesh. Safe, reliable, and professional caregivers at your home.",

  keywords: [
    "baby sitting",
    "elderly care",
    "patient care",
    "home care service",
    "Bangladesh care service",
  ],

  openGraph: {
    title: "Care Haven Care Services",
    description: "Find trusted caregivers for your loved ones easily.",
    url: "https://care.xyz",
    siteName: "Care.xyz",
    images: [
      {
        url: "/images/og-home.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Care Haven",
    description: "Trusted care services at your home",
    images: ["/images/og-home.png"],
  },
};

const Home = () => {
  return (
    <div className="">
      <HeroBanner />
      <HowItWorks />
      <WhyChooseUs />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
