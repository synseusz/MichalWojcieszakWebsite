import React, {useState} from "react";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { AboutData, ContactData } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TrainingPlans from "../components/TrainingPlansSection";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }



  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...AboutData} />
      <TrainingPlans />
      <ContactSection {...ContactData} />
      <Footer />
    </>
  );
};

export default Home;
