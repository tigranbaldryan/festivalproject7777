import React, { useEffect, useRef } from 'react'
import st from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'



function Schedule() {

  const scheduleRef = useRef();


  const scrollHandler = (elmRef) => {
    const yOffset = window.scrollY;
    const targetY = elmRef.current.getBoundingClientRect().bottom + yOffset + 200;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
    // alert("are you going to buy a ticket?")
  };

  // const [showTable1, setShowTable1] = useState(true);


  // const toggleTables = () => {
  //   setShowTable1((prevShowTable1) => !prevShowTable1);



  // };


  // useEffect(() => {
  //   const itervalId = setInterval(toggleTables, 3000)
  //   return () => clearInterval(itervalId)
  // }, []);



  return <>


<Carousel showThumbs={false}>
    {/* {showTable1 ? ( */}
      <div className={st.mySchedule}>
        <h1>Event Schedule</h1>

        <table className={st.myTable}>
          <thead >
            <tr className={st.myTableTr}>
              <th className={st.Date}>Date</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th className={st.Friday}>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr className={st.myTableTr2}>
              <td className={st.tdMyDay}>Day 1 </td>
              <td className={st.myTableTrForPic} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Pop Night</h1>
                <p>5:00 - 7:00 PM</p>
                <p>By Madona</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Erevan</p>
              </td>
              <td className={st.tdDatark}>

              </td>
              <td className={st.myTableTrForPic2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Rock & Roll</h1>
                <p>7:00 - 11:00 PM</p>
                <p>By Rihana</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Praha</p>
              </td>

            </tr>

            <tr className={st.myTableTr3}>
              <td className={st.tdMyDay2}>Day 2</td>
              <td className={st.tdDatark2}>

              </td>
              <td className={st.myTableTrForPic3} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>DJ Night</h1>
                <p>6:30 - 9:30 PM</p>
                <p>By Rihana</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Venetik</p>
              </td>
              <td className={st.tdDatark22}>

              </td>
            </tr>

            <tr className={st.myTableTr4}>
              <td className={st.tdMyDay3}>Day 3</td>
              <td className={st.myTableTrForPic4}  onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Country Music</h1>
                <p>4:30 - 7:30 PM</p>
                <p>By Bruno</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Lisabon</p>
              </td>
              <td className={st.tdDatark3}>

              </td>
              <td className={st.myTableTrForPic5}  onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Free Styles</h1>
                <p>6:00 - 10:00 PM</p>
                <p>By Members</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Vanadzor</p>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    {/* ) : ( */}
      <div className={st.mySchedule}>
        <h1>Event Schedule</h1>

        <table className={st.myTable_2}>
          <thead >
            <tr className={st.myTableTr_2}>
              <th className={st.Date_2}>Date</th>
              <th>Sunday</th>
              <th>Monday</th>
              <th className={st.Friday_2}>Saterday</th>
            </tr>
          </thead>
          <tbody>
            <tr className={st.myTableTr2_2}>
              <td className={st.tdMyDay_2}>Day 4 </td>
              <td className={st.myTableTrForPic_2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Pop Night</h1>
                <p>5:00 - 7:00 PM</p>
                <p>By Ladaniva</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Erevan</p>
              </td>
              <td className={st.tdDatark_2}>

              </td>
              <td className={st.myTableTrForPic2_2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Pop</h1>
                <p>7:00 - 11:00 PM</p>
                <p>Arkadi</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Gyumri</p>
              </td>

            </tr>

            <tr className={st.myTableTr3_2}>
              <td className={st.tdMyDay2_2}>Day 5</td>
              <td className={st.tdDatark2_2}>

              </td>
              <td className={st.myTableTrForPic3_2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Pop Night</h1>
                <p>6:30 - 9:30 PM</p>
                <p>By Sirusho</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Erevan</p>
              </td>
              <td className={st.tdDatark22_2}>

              </td>
            </tr>

            <tr className={st.myTableTr4_2}>
              <td className={st.tdMyDay3_2}>Day 6</td>
              <td className={st.myTableTrForPic4_2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Country Music</h1>
                <p>4:30 - 7:30 PM</p>
                <p>By Sirusho</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Ijevan</p>
              </td>
              <td className={st.tdDatark3_2}>

              </td>
              <td className={st.myTableTrForPic5_2} onClick={() => scrollHandler(scheduleRef)} ref={scheduleRef}>
                <h1>Free Styles</h1>
                <p>6:00 - 10:00 PM</p>
                <p>By Arkadi</p>
                <p><FontAwesomeIcon icon={faLocationDot} color='red' />Vanadzor</p>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
   



</Carousel>
  </>
}



export default Schedule




