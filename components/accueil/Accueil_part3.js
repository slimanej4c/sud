import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"

import {events_text ,section_title} from "../../public/static/text/accueil/actualite_event"
import {Set_current_image_redux } from '../../Redux'
import {Set_cookies_redux } from '../../Redux'
export const Accueil_part3 = (props) => {
    const [currentEvent, setcurrentEvent] = useState(0);
    const [y_init_image, sety_init_image] = useState('100%');
    const [y_exit_image, sety_exit_image] = useState('0%');
    const [y_init, sety_init] = useState('0%');
    const [y_exit, sety_exit] = useState('-100%');
    const [stop_auto, setstop_auto] = useState(true);

    const image_eventVariants = {
        initial: {
          opacity: 0,
          y: y_init_image,
        },
        animate: {
          opacity: 1,
          y: '0%',
          transition: {
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          y: y_exit_image,
          transition: {
            duration: 1,
          },
        },
      };
      
    const textVariants = {
        initial: {
          opacity: 0,
          y: y_init,
        },
        animate: {
          opacity: 1,
          y: '0%',
          transition: {
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          y: y_exit,
          transition: {
            duration: 1,
          },
        },
      };
  
    const change_event = (myParam) => {
        setstop_auto(false)
         if (myParam==="next"){
          { currentEvent===events_text[0][props.langue].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
          props.Set_cookies_redux(true)
          sety_init('100%')
          sety_init_image('-100%')
        
         }
         else{
          { currentEvent===0 ?  setcurrentEvent(events_text[0][props.langue].length-1)  : setcurrentEvent(currentEvent-1)}
          props.Set_cookies_redux(false)
          sety_init('-100%')
          sety_init_image('100%')
        
         }
      
         console.log(currentEvent,myParam,'hi')
      };
      
        useEffect(() => {
          const interval = setInterval(() => {
         
          if (stop_auto){
            { currentEvent===events_text[0][props.langue].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
            sety_init('100%')
          sety_init_image('-100%')
          }
           
          }, 8000);
          return () => clearInterval(interval);
        }, [currentEvent]);
    
  return (
    <section className='home-part3'>
    <div className='home-part3-1'>
      <h1>{section_title[props.langue][0].title}</h1>
    </div>

    <div className='home-part3-2'>
      <AnimatePresence>
        <motion.div
          className='home-part3-2-image'
          style={{backgroundImage: `url(${events_text[0][props.langue][currentEvent].image})`}}
          variants={image_eventVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={events_text[0][props.langue][currentEvent].image}
        >
        </motion.div>
                          
        <motion.div
          className='home-part3-2-text'
          variants={textVariants}
          initial="initial"
          animate="animate"
        
          key={events_text[0][props.langue][currentEvent].title}
          onAnimationComplete={definition => {
            console.log('Completed animating', definition)
          }}
        >
          <div className='home-part3-2-text-div'>
            <h1>
              {events_text[0][props.langue][currentEvent].title}
            </h1>
            <p>
              {events_text[0][props.langue][currentEvent].resume_text}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className='home-part3-help1' style={{backgroundImage: `url(${events_text[0][props.langue][currentEvent].image})`}}>
      </div>

      <div className='home-part3-help2'>
        <h1>
          {events_text[0][props.langue][currentEvent].title}
        </h1>
        <p>
          {events_text[0][props.langue][currentEvent].text}
        </p>
      </div>
    </div>

   
    <div className='home-part3-3-index'>
        {events_text[0][props.langue].map((index)=>{
          let backgroundColor = 'green';
          if (index.id ===currentEvent+1) {
            backgroundColor = '#f75a36';
          }
          return(
            <div className='home-part3-3-index-div' style={{backgroundColor}}>
            </div>
          )
        })}
      </div>
      <div className='home-part3-3'>
     

     <div className='home-part3-buttons'>
       <button className='home-part3-button prev' onClick={()=>change_event('prev')}>&lt;</button>
       <button className='home-part3-button next' onClick={()=>change_event('next')}>&gt;</button>
     </div>
   </div>
  </section>
  )
}
const mapStateToProps = (state) => ({
    langue:state.change_langue_reducer.langue,
    cookies_accepted:state.change_langue_reducer.cookies_accepted,
    current_image:state.change_langue_reducer.current_image,
  })
  
  const mapDispatchToProps = dispatch =>{
  return{
   
    Set_cookies_redux:(val)=>dispatch(Set_cookies_redux(val)),
  
  }
  
  }
export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part3)