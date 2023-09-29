

import React,{useRef} from 'react';
import st from './style.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function Artists() {

  const madonaRef = useRef();
  const rihanaRef = useRef();
  const brunoRef = useRef();
  const haykoRef = useRef();
  const arkadiRef = useRef();
  const sirushoRef = useRef();

  const scrollHandler = (elmRef) => {
    const yOffset = window.scrollY;
    const targetY = elmRef.current.getBoundingClientRect().bottom + yOffset+300;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };
  return (
    <>
      <div className={st.textH1}>
        <h1>Meet Artists</h1>
      </div>
      <Carousel showThumbs={false}>
        <div className={st.myArtists} ref={madonaRef} onClick={() => scrollHandler(madonaRef)}>
          <div className={st.forArtistPic}>
          <div className={st.forHover}>
         <div className={st.forHoverTop}>
          <div>
            <h3>Name:</h3>
            <h3>Birthdate:</h3>
             <h3>Music:</h3>
          </div>
          <div> 
               <p>Madona</p>
              <p>August 16, 1958</p>
              <p>Pop, R&B</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a  href='https://www.youtube.com/channel/UC81VD6eeuLLSfyY_D-N8sVw' target='_blank'>Madona Official</a>
          
           </div>
         </div>
          </div>
          <div className={st.div2} ref={rihanaRef} onClick={() => scrollHandler(rihanaRef)}>
            <div className={st.forArtistPic2}>
            <div className={st.forHover2}>
           <div className={st.forHoverTop2}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
             <h3>Music:</h3>
           </div>
           <div>
             <p>Rihana</p>
             <p>February 20, 1988</p>
             <p>Country</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/channel/UCcgqSM4YEo5vVQpqwN-MaNw' target='_blank'>Rihana Official</a>
          
           </div>
         </div>
            </div>
            <div className={st.forArtistPic3} ref={brunoRef} onClick={() => scrollHandler(brunoRef)}>
            <div className={st.forHover3}>
           <div className={st.forHoverTop3}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
            <h3>Music:</h3>
           </div>
           <div>
             <p>Bruno Mars</p>
             <p>October 8, 1985</p>
             <p>Pop</p>
           </div>
           </div>
           <div className={st.forHoverBottom}>
          
             <h3>Youtube Channel:</h3>
            <a href='https://www.youtube.com/channel/UCoUM-UJ7rirJYP8CQ0EIaHA' target='_blank'>Bruno Official</a>
          
          </div>
         </div>
            </div>
          </div>
        </div>
        {/* erkrord eji */}
        <div className={st.myArtists_2} ref={haykoRef} onClick={() => scrollHandler(haykoRef)}>
          <div className={st.forArtistPic_2}>
          <div className={st.forHover_2}>
         <div className={st.forHoverTop_2}>
          <div>
            <h3>Name:</h3>
            <h3>Birthdate:</h3>
             <h3>Music:</h3>
          </div>
          <div> 
               <p>Ladaniva</p>
              <p>August 5, 1991</p>
              <p>Pop</p>
           </div>
           </div>
           <div className={st.forHoverBottom_2}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/@ladaniva8694'target='_blank'>Ladaniva Official</a>
          
           </div>
         </div>
          </div>
          <div className={st.div2_2}  ref={arkadiRef} onClick={() => scrollHandler(arkadiRef)}>
            <div className={st.forArtistPic2_2}>
            <div className={st.forHover2_2}>
           <div className={st.forHoverTop2_2}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
             <h3>Music:</h3>
           </div>
           <div>
             <p>Arkadi DuMikyan</p>
             <p>May 27, 1989</p>
             <p>Country</p>
           </div>
           </div>
           <div className={st.forHoverBottom_2}>
          
             <h3>Youtube Channel:</h3>
             <a href='https://www.youtube.com/channel/UCqSmTJ_Ld39NyjzMrSv4tww' target='_blank'>Arkadi Official</a>
          
           </div>
         </div>
            </div>
            <div className={st.forArtistPic3_2}   ref={sirushoRef} onClick={() => scrollHandler(sirushoRef)}>
            <div className={st.forHover3_2}>
           <div className={st.forHoverTop3_2}>
           <div>
             <h3>Name:</h3>
             <h3>Birthdate:</h3>
            <h3>Music:</h3>
           </div>
           <div>
             <p>Sirusho</p>
             <p>Un 7, 1987</p>
             <p>Pop</p>
           </div>
           </div>
           <div className={st.forHoverBottom_2}>
           <h3>Youtube Channel:</h3>
            {/* <a ref={sirushoRef} onClick={() => scrollHandler(sirushoRef)}>Sirusho Official</a>
            
           */}
           <a href='https://www.youtube.com/channel/UC6834ubQWvySCcdZZfiLa0g' target='_blank'>Sirusho Official</a>
          </div>
         </div>
            </div>
          </div>
        </div>
      
      </Carousel>


      
    </>
  );
}

export default Artists;
