import React, { useRef, useState } from "react";
import st from './style.module.css'
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Artists from "../pages/Artists/Artists";
import Schedule from "../pages/Schedule/Schedule";
import Pricing from "../pages/Pricing/Pricing";
import Contact from "../pages/Contact/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import Fyuter from "../pages/Fyuter/Fyuter";


function Menu() {

  const homeRef = useRef();
  const aboutRef = useRef();
  const artistsRef = useRef();
  const scheduleRef = useRef();
  const pricingRef = useRef();
  const contactRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollHandler = (elmRef) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuy = () => {

    alert("Online The ticket has been purchased");

    closeModal();
  };

  return (
    <>
      <div className={st.myMenu}>
        <h1>Festava Live</h1>
        <ul>
          <li onClick={() => scrollHandler(homeRef)}>Home</li>
          <li onClick={() => scrollHandler(aboutRef)}>About</li>
          <li onClick={() => scrollHandler(artistsRef)}>Artists</li>
          <li onClick={() => scrollHandler(scheduleRef)}>Schedule</li>
          <li onClick={() => scrollHandler(pricingRef)}>Pricing</li>
          <li onClick={() => scrollHandler(contactRef)}>Contact</li>
        </ul>
        <button className={st.btn1} onClick={openModal}>Buy Ticket</button>
      </div>

      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={artistsRef}><Artists /></div>
      <div ref={scheduleRef}><Schedule /></div>
      <div ref={pricingRef}><Pricing /></div>
      <div ref={contactRef}><Contact /></div>
      <div><Fyuter /></div>

      {isModalOpen && (
        <div className={st.modal}>
          <div className={st.modalContent}>
            <h2>Fill in your data</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Card Number" />
            <div className={st.forCardIcons}>
              <FontAwesomeIcon icon={faCcMastercard} className={st.cardIcons} />
              <FontAwesomeIcon icon={faCcVisa} className={st.cardIcons} />
              <FontAwesomeIcon icon={faCcPaypal} className={st.cardIcons} />
              <FontAwesomeIcon icon={faCcApplePay} className={st.cardIcons} />
            </div>
            <div className={st.forModalButton}>
              <button onClick={handleBuy}>Buy</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
