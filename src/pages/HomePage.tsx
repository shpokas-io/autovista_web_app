import React from "react";
import NavigationBar from "../components/layout/NavigationBar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/HomePageSections/HeroSection";
import FeaturesSection from "../components/HomePageSections/FeaturesSection";
import HowItWorksSection from "../components/HomePageSections/HowItWorks";

const HomePage: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <Footer />
    </>
  );
};

export default HomePage;
