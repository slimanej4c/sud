import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { intro_text } from '../../public/static/text/agir/intro';
export const Agir_nous = (props) => {
  

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 0.9,
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
      const lineVariants = {
        initial: {
          opacity: 0,
          width:'0%',
       
        },
        animate: {
          opacity: 1,
          width:'50%',
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
  return (
    <div className='agir_nous'>
         
          <div className='image'
                        style={{ backgroundImage: `url(${"/static/images/agir_nous.jpg"})` }}
                            >
                            <div className='text'>
                            <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                                    {intro_text[0][props.langue].title.split("").map((letter) => (
                                    <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                                    ))}
                                </motion.h1>
                        
                            <motion.hr class="linne"
                            variants={lineVariants}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            key={2}/>
                                <p>{intro_text[0][props.langue].intro}</p>
                                <div className='button'>
                                    <button>{intro_text[0][props.langue].title}
                                    </button>
                        </div>
                                
                        </div>

                        
          </div>
         

        
    </div>
  )
}

const mapStateToProps = (state) => ({
  langue:state.change_langue_reducer.langue,
  cookies_accepted:state.change_langue_reducer.cookies_accepted,
  current_image:state.change_langue_reducer.current_image,
})
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Agir_nous)