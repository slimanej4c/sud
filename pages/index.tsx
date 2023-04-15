import Layout from '../hocs/Layout'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux'
import {Set_cookies_redux } from '../Redux'
import {Set_current_image_redux } from '../Redux'

import {messions ,images ,titles ,aprops,events} from "./text_index"


  


function Home(props)  {

 
 
    const [currentImage, setCurrentImage] = useState(0);
    const [currentEvent, setcurrentEvent] = useState(0);
    const [y_init, sety_init] = useState('0%');
    const [y_exit, sety_exit] = useState('-100%');
    const [y_init_image, sety_init_image] = useState('100%');
    const [y_exit_image, sety_exit_image] = useState('0%');
    const [stop_auto, setstop_auto] = useState(true);


  
   
  
  
      useEffect(() => {
      
   console.log('langue changed to', props.langue ,props.cookies_accepted)
  

  }, [props.langue]);

   
  

    
  

  
  const change_event = (myParam) => {
    setstop_auto(false)
     if (myParam==="next"){
      { currentEvent===events[0]['fr'].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
      props.Set_cookies_redux(true)
      sety_init('100%')
      sety_init_image('-100%')
    
     }
     else{
      { currentEvent===0 ?  setcurrentEvent(events[0]['fr'].length-1)  : setcurrentEvent(currentEvent-1)}
      props.Set_cookies_redux(false)
      sety_init('-100%')
      sety_init_image('100%')
    
     }
  
     console.log(currentEvent,myParam,'hi')
  };
    useEffect(() => {
      const interval = setInterval(() => {
        {props.current_image>=images.length-1 ? props.Set_current_image_redux(0) :props.Set_current_image_redux(props.current_image+1)}
       
       // setCurrentImage(currentImage => (currentImage + 1) % images.length);
       
      }, 8000);
      return () => clearInterval(interval);
    }, [props.current_image ]);
    useEffect(() => {
      const interval = setInterval(() => {
     
      if (stop_auto){
        { currentEvent===events[0]['fr'].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
        sety_init('100%')
      sety_init_image('-100%')
      }
       
      }, 8000);
      return () => clearInterval(interval);
    }, [currentEvent]);
    const imageVariants = {
      initial: {
        opacity: 0,
        x: '100%',
      },
      animate: {
        opacity: 1,
        x: '0%',
        transition: {
          duration: 3,
        },
      },
      exit: {
        opacity: 0,
        x: '-100%',
        transition: {
          duration: 3,
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
    const titleVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.9,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };
    const titleVariants2 = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.9,
        transition: {
          staggerChildren: 0.009,
        },
      },
    };
 
    const letterVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
          // ou
          ease: (t) => t * t, // utiliser une fonction
        },
      },
    };
  
    const messionVariants = {
      hidden: {  opacity:0 },
      visible: {
        
        opacity:1 ,
        transition: {
          
          duration: 0,
          type: "spring",
          stiffness: 100,
         
          mass: 0.5,
          damping: 10,
          staggerChildren: 0.1,
          delayChildren: 0.5,
        },
      },
    };
    
    const mession_itemVariants = {
      hidden: { x: "-200%", opacity: 0.5 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
         
          duration: 3,
          
          type: "spring",
          stiffness: 100,
          mass: 0.5,
          damping: 10,
          staggerChildren: 0.1,
          delayChildren: 0.5,
        },
      },
    };


    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
          <div className='home-all-part'>
                <div className='home-part1'>
                  <div className='home-part1-1'    style={{ backgroundColor:`${images[currentImage].color}`,color:`${images[currentImage].fcolor}` , transition: 'background-color 3s ease'}}>

                  
                  <div className="presentation-title"  >
                  <AnimatePresence key={props.current_image}  >
                            
                            <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                              {titles[0][props.langue][props.current_image].title.split("").map((letter) => (
                                <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.h1>
                            <motion.p variants={titleVariants} initial="hidden" whileInView="visible" >
                            {titles[0][props.langue][props.current_image].text.split("").map((letter) => (
                                <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                              ))}
                             
                            </motion.p>
                  </AnimatePresence>
    </div>
                          <div   className="presentation-img">
                                  <AnimatePresence>
                                  <motion.div
                                className="presentation-sous-img"
                                style={{backgroundImage: `url(${images[props.current_image].image})` }}
                                variants={imageVariants}
                                initial="initial"
                                whileInView="animate"
                                exit="exit"
                                key={props.current_image}
                              /> 
                              </AnimatePresence>
                        </div>
                  </div>
                  <div className='home-part1-2'>
                        <div className='presentation-aprops'>
                             
                               

                            <motion.h1 variants={titleVariants} initial="hidden" animate="visible">
                              {aprops[0][props.langue].title.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.h1>
    
                            <motion.p variants={titleVariants2} initial="hidden" animate="visible" >
                             
                              {aprops[0][props.langue].text.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.p>
                            
                        </div>
                  </div>
               </div>
               <div className='home-part2'>

                          
                    <div className='home-part2-1'>
                      <div className='messions-title'>
                              <h1>Messions</h1>
                      </div>
                      
                      <motion.div className='messions-type' 
                      variants={messionVariants}
                      initial="hidden"
                      whileInView="visible"
                      >
                        {
                          messions[0]['fr'].map((items=>{
                            return(
                              <motion.div className='mession' key={items.id}
                               variants={mession_itemVariants}
                              // style={{backgroundImage: `url(${items.image})` }}
                      >
                                <h1>{items.title}</h1>
                                <p>{items.text}</p>
                              </motion.div>
                            )
                          }))
                        }

                      </motion.div>

                    </div>
              </div>

              <div className='home-part3'>

                  <div className='home-part3-1'>
                        <h1>Actualités et événements</h1>

                  </div>

                  <div className='home-part3-2'>
                          <AnimatePresence >
                              <motion.div className='home-part3-2-image'
                                style={{backgroundImage: `url(${events[0]["fr"][currentEvent].image})`}}
                                variants={image_eventVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                key={events[0]["fr"][currentEvent].image}
                               >

                              </motion.div>
                         
                                <motion.div className='home-part3-2-text'
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                               key={events[0]['fr'][currentEvent].title}
                                onAnimationComplete={definition => {
                                  console.log('Completed animating', definition)
                                
                                
                                }}
                                >
                                  <div className='home-part3-2-text-div'>
                                  
                                        <h1>
                                        {events[0]['fr'][currentEvent].title}
                                        </h1>
                                        <p>
                                          {events[0]['fr'][currentEvent].text}
                                        </p>
                                        </div>
                                 
                                </motion.div>
                          </AnimatePresence>
                          <div className='home-part3-help1'   style={{backgroundImage: `url(${events[0]['fr'][currentEvent].image})`}}>
                             

                          </div>
                          
                          <div className='home-part3-help2'>
                                  
                                  <h1>
                                  {events[0]['fr'][currentEvent].title}
                                  </h1>
                                  <p>
                                    {events[0]['fr'][currentEvent].text}
                                  </p>
                          </div>

                  </div>
                  <div className='home-part3-3'>
                    <div className='home-part3-3-index'>
                    {events[0]['fr'].map((index)=>{
                                let backgroundColor = 'green';
                                if (index.id ===currentEvent+1) {
                                  backgroundColor = '#B64D07';
                                }
                                return(
                                  <div className='home-part3-3-index-div' style={{backgroundColor}}>
                                  </div>
                                )
                              })}
                    </div>
                    <div className='home-part3-buttons'>
                        <button className='home-part3-button prev' onClick={()=>change_event('prev')}>&lt;</button>
                        <button className='home-part3-button next' onClick={()=>change_event('next')}>&gt;</button>

                    </div>
                 
                        

                  </div>

              </div>

              <div className='home-part4'>
                <div>
                  <h1>
             
                  </h1>
                </div>

              </div>
                
            </div>
        </div>
    </Layout>
    )
};

const mapStateToProps = (state) => ({
  langue:state.change_langue_reducer.langue,
  cookies_accepted:state.change_langue_reducer.cookies_accepted,
  current_image:state.change_langue_reducer.current_image,
})

const mapDispatchToProps = dispatch =>{
return{
 
  Set_cookies_redux:(val)=>dispatch(Set_cookies_redux(val)),
  Set_current_image_redux:(val)=>dispatch(Set_current_image_redux(val)),

}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
