import React, { useState } from "react";
import ContactSection from "../components/ContactSection";
import ContactSection2 from "../components/ContactSection/index2";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import InfoSection from "../components/InfoSection";
import { AboutData, ContactData } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import TrainingPlans from "../components/TrainingPlansSection";

import MessengerCustomerChat from "react-messenger-customer-chat";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MessengerCustomerChat pageId="753206974730152" appId="715051529518972" />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection {...AboutData} />
      <TrainingPlans />
      {/*<ContactSection {...ContactData} />*/}
      <ContactSection2 {...ContactData} />
      <Footer />
    </>
  );
};

export default Home;
