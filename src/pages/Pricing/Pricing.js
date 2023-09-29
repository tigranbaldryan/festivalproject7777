import React, { useState } from 'react'
import st from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCcApplePay, faCcMastercard, faCcPaypal, faCcVisa } from "@fortawesome/free-brands-svg-icons";

function Pricing() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleBuy = () => {
    
    alert("Online Ticket purchase has been completed");

    closeModal();
  };



  return <>
    <div className={st.myPricing}>
      <div className={st.forHeaderText}>
        <h1>Plans, you' love</h1>
      </div>

      <div className={st.divFor2Divs}>
        <div className={st.divKeterov1}>
          <div className={st.keterovDiviMejiDiv1}>
            <div className={st.mecTexteriHamar}>
              <h2>Early Bird</h2>
              <h1>$120</h1>
              </div>
              <p>Including good things:</p>
              <div className={st.poqrTexteriHamar1}>
                <p>• platform for potential customers</p>
                <p>• digital experience</p>
              </div>

              <div className={st.buttoniHamar}>
              <button onClick={openModal}>Buy Ticket</button>
              </div> 

          </div>

          <div className={st.keterovDiviMejiDiv2}>
            <div className={st.kloriHamarDiv}>
              <div className={st.forCircle}>
                <h2>Save up to</h2>
                <h1>50%</h1>
              </div>

            </div>
            <div className={st.poqrTexteriHamar2}>
              <p>• high-quality sound</p>
              <p>• standard content</p>
            </div>

          </div>

        </div>



        <div className={st.divKeterov1}>
          <div className={st.keterovDiviMejiDiv1}>
            <div className={st.mecTexteriHamar}>
              <h2>Standard</h2>
              <h1>$240</h1>
              </div>
              <p>What makes a premium festava?</p>
              <div className={st.poqrTexteriHamar1}>
                <p>• platform for potential customers</p>
                <p>• digital experience</p>
              </div>

              <div className={st.buttoniHamar}>
              <button onClick={openModal}>Buy Ticket</button>
              </div> 

          </div>

          <div className={st.keterovDiviMejiDiv2}>
            <div className={st.kloriHamarDiv}>
             

            </div>
            <div className={st.poqrTexteriHamar2}>
              <p>• high-quality sound</p>
              <p>• standard content</p>
              <p>• live chat support</p>
            </div>

          </div>

        </div>



      </div>
      
    </div>
    {isModalOpen && (
        <div className={st.modal}>
          <div className={st.modalContent}>
            <h2>Fill in your data</h2>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Surname" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Card Number"/>
            <div className={st.forCardIcons}>
            <FontAwesomeIcon icon={faCcMastercard} className={st.cardIcons} />
            <FontAwesomeIcon icon={faCcVisa}  className={st.cardIcons}/>
            <FontAwesomeIcon icon={faCcPaypal} className={st.cardIcons} />
            <FontAwesomeIcon icon={faCcApplePay}  className={st.cardIcons}/>
            </div>
            <div className={st.forModalButton}>
            <button onClick={handleBuy}>Buy</button>
            <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
}

export default Pricing
