import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import {messions ,images ,titles ,aprops,events,figures} from "../../public/static/text/text_index"
import {Set_current_image_redux } from '../../Redux'
export const Accueil_part1 = (props) => {
    const [currentImage, setCurrentImage] = useState(0);

        useEffect(() => {
      const interval = setInterval(() => {
        {props.current_image>=images.length-1 ? props.Set_current_image_redux(0) :props.Set_current_image_redux(props.current_image+1)}
       
       // setCurrentImage(currentImage => (currentImage + 1) % images.length);
       
      }, 8000);
      return () => clearInterval(interval);
    }, [props.current_image ]);

    const imageVariants = {
        initial: {
          opacity: 0,
       
        },
        animate: {
          opacity: 1,
        
          transition: {
            duration: 2,
          },
        },
        exit: {
          opacity: 0,
      
          transition: {
            duration: 2,
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
      const apropsVariants = {
        visible: { opacity: 1,x:"0%", transition: { duration: 1  , type: "spring", } },
        hidden: { opacity: 0 ,x:"-100%"}
      };
  return (
    <section className='home-part1'>
            <div
              className='home-part1-1'
              style={{
                backgroundColor: `${images[currentImage].color}`,
                color: `${images[currentImage].fcolor}`,
                transition: 'background-color 3s ease'
              }}
            >
              <div className="presentation-title">
                <AnimatePresence key={props.current_image}>
                  <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles[0][props.langue][props.current_image].title.split("").map((letter) => (
                      <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.h1>
                  <motion.p variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles[0][props.langue][props.current_image].text.split("").map((letter) => (
                      <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="presentation-img">
                <AnimatePresence>
                  <motion.div
                    className="presentation-sous-img"
                    style={{ backgroundImage: `url(${images[props.current_image].image})` }}
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
              <AnimatePresence>
                <motion.div
                  className='presentation-aprops'
                  viewport={{ once: true }}
                  whileInView="visible"
                  initial="hidden"
                  variants={apropsVariants}
                >
                  <h1>
                    <span>{aprops[0][props.langue].title}</span>
                  </h1>
                  <p>
                    <span>{aprops[0][props.langue].text}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
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
    Set_current_image_redux:(val)=>dispatch(Set_current_image_redux(val)),
 
  
  }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part1)