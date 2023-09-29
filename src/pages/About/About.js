import React from 'react'
import st from './style.module.css'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function About() {
  return (
    <div className={st.myAbout}>
      <div className={st.forTexts}>
        <h1>About Festava 2022</h1>
              <p>Festava Live is free CSS template provided by TemplateMo website.
                 This layout is built on Bootstrap v5.2.2 CSS library. You are free
                 to use this template for your commercial website.
              </p>
        <h3>Once in Lifetime Experience</h3>
        <p>You are not allowed to redistribute the template ZIP file on any other website without a permission.</p>
        <h3>Whole Night Party</h3>
        <p>Please tell your friends about our website. Thank you.</p>
      </div>
      {/* nkarnerov divi hamar takiny */}

      <div className={st.forPicDiv}>
        <div className={st.forIconAndText}>
          <div className={st.forIcon}><FontAwesomeIcon icon={faUser}  /></div>
          <div className={st.forDivText}>
            <h1>a happy moment</h1>
            <p>your amazing festival experience with us</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
