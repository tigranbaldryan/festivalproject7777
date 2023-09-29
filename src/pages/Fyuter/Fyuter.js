import React from 'react'
import st from './style.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'


function Fyuter() {


  return (
    <>
      <div className={st.fyuter}>
        <div>
          <h3> Festava Live</h3>
        </div>
        <div className={st.icons}>


          <div className={st.iconT}>
            <FontAwesomeIcon icon={faTwitter} color='white' />
          </div>
          <div className={st.iconT}>
            <FontAwesomeIcon icon={faApple} color='white' />
          </div>
          <div className={st.iconI}>
            <FontAwesomeIcon icon={faInstagram} color='white' />
          </div>
          <div className={st.iconI}>
            <FontAwesomeIcon icon={faYoutube} color='white' />
          </div>
          <div className={st.iconI}>
            <FontAwesomeIcon icon={faPinterest} color='white' />
          </div>

        </div>
      </div>

      {/* *************************** 2 */}

      <div className={st.divMec}>

        <div className={st.div_1}>
        
            <h2>Links</h2>

        
          <p>Home  About  Artists  Schedule  Pricing  Contact</p>
        
           
         
        </div>

        <div className={st.div_2}>
          <h2>Have a question?</h2>
          <p>090-080-0760</p>
          <p>hello@company.com</p>
        </div>

        <div className={st.div_3}>
          <h2>Location</h2>
          <p>Silang Junction South, Tagaytay,</p>
          <p>Cavite, Philippines</p>
          <a class="link-fx-1 color-contrast-higher mt-3" href="#">
            <span>Our Maps</span>
            <svg class="icon" viewBox="0 0 32 32" aria-hidden="true" width="25px" height="25px"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="16" cy="16" r="15.5"></circle><line x1="10" y1="18" x2="16" y2="12"></line><line x1="16" y1="12" x2="22" y2="18"></line></g></svg>
          </a>
        </div>

        {/* ***************** 3 */}




      </div>

 
       <div className={st.span}>
        <span></span>

      </div> 

      <div className={st.mec2}>
        <div>
          <p>Copyright © 2036 Festava Live</p>
          <p>Company</p>
        </div>

        <div className={st.div_verj}>
          <p>Terms & Conditions</p>
          <p> Privacy Policy</p>
          <p> Your Feedback</p>
        </div>
      </div>

     







    </>

  )
}

export default Fyuter
