import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence , useMotionValue, useDragControls} from "framer-motion"
import {temoignage_text  ,section_title} from "../../public/static/text/accueil/temoignage"
import {Set_current_image_redux } from '../../Redux'
import {Set_cookies_redux } from '../../Redux'
export const Accueil_part4 = (props) => {

    const [currentFigure, setcurrentFigure] = useState(0);
 
    const [y_init, sety_init] = useState(0);
    const [stop_auto_figure, setstop_auto_figure] = useState(true);
    const [y_exit_figure, sety_exit_figure] = useState(true);
    const [y_init_figure, sety_init_figure] = useState('100%');

   
 
    const dragControls = useDragControls();
    useEffect(() => {
    console.log(y_exit_figure)
    { y_exit_figure ? setcurrentFigure((currentFigure - 1 + temoignage_text[0][props.langue].length) % temoignage_text[0][props.langue].length):
      setcurrentFigure((currentFigure + 1) % temoignage_text[0][props.langue].length);}
    }, [y_init]);

    const change_figure = (myParam) => {
      setstop_auto_figure(false)
      sety_init(y_init+1)
       if (myParam==="prev"){
         sety_init_figure('-100%')
        sety_exit_figure(true)
     
      
       
      
       }
       else{
        sety_init_figure('100%')
        sety_exit_figure(false)
      
        
    };
    
  }
    const handleDragEnd = (event, info) => {
      sety_init(y_init+1)
        sety_exit_figure('0%')
      if (info.offset.x > 50) {
        // if the user has dragged the image by more than 50 pixels to the right, move to the next figure
        sety_init_figure('-100%')
        sety_exit_figure(true)
      
       
       
      } else if (info.offset.x < -50) {
        // if the user has dragged the image by more than 50 pixels to the left, move to the previous figure
        sety_init_figure('100%')
        sety_exit_figure(false)
     
        
      }
    };
   
  
  
    // useEffect(() => {
    //     const interval = setInterval(() => {
       
    //     if (stop_auto_figure){
    //       setcurrentFigure((currentFigure + 1) % temoignage_text[0][props.langue].length);
    //       sety_init('-100%')
    //     sety_init_figure('100%')
    //     }
         
    //     }, 6000);
    //     return () => clearInterval(interval);
    //   }, []);
  
  
      
  
   
      const image_figuretVariantsr = {
        initial: {
          opacity: 0,
          x:"-100%",
        },
        animate: {
          opacity: 1,
          x: '0%',
          transition: {
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          x:"100%",
          transition: {
            duration: 1,
          },
        },
        
      };
      const image_figuretVariantsl = {
        initial: {
          opacity: 0,
          x:"100%",
        },
        animate: {
          opacity: 1,
          x: '0%',
          transition: {
            duration: 1,
          },
        },
     
        exit: {
          opacity: 0,
          x:"-100%",
          transition: {
            duration:0.5,
          },
        },
      };
  return (
    <section className='home-part4'>
    <div className='home-part4-title'>
    <h1>{section_title[props.langue][0].title}</h1>
    </div>
   
    <div className='home-figure'>
      
    <AnimatePresence>
    <motion.figure className="snip1390"
     variants={y_exit_figure ? image_figuretVariantsr : image_figuretVariantsl}
     initial="initial"
     animate="animate"
     exit="exit"
     key={temoignage_text[0][props.langue][currentFigure].id}
     drag="x" 
     dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.2}
      dragControls={dragControls}
      onDragEnd={handleDragEnd}>
              <img src={temoignage_text[0][props.langue][currentFigure].imgSrc} alt={temoignage_text[0][props.langue][currentFigure].imgAlt} className="profile" />
              <figcaption>
                <h2>{temoignage_text[0][props.langue][currentFigure].name}</h2>
                <h4>{temoignage_text[0][props.langue][currentFigure].role}</h4>
                <blockquote>{temoignage_text[0][props.langue][currentFigure].quote}</blockquote>
              </figcaption>
     </motion.figure>
     </AnimatePresence>


     <div className='home-figure-index'>
          {temoignage_text[0][props.langue].map((index)=>{
            let backgroundColor = 'green';
            if (index.id ===currentFigure+1) {
              backgroundColor = '#B64D07';
            }
            return(
              <div className='home-figure-index-div' style={{backgroundColor}}>
              </div>
            )
          })}
           </div>
    </div>
    <div className='home-part4-buttons'>
        <button className='home-part4-button prev' onClick={()=>change_figure('prev')}>&lt;</button>
        <button className='home-part4-button next' onClick={()=>change_figure('next')}>&gt;</button>
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
    Set_current_image_redux:(val)=>dispatch(Set_current_image_redux(val)),
  
  }
  
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part4)