import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
export const Agir_nous = (props) => {
    const don_text=[{"FR":{title:"AGIR AVEC NOUS","intro":"Faire un don est un acte important et généreux qui peut faire une grande différence dans la vie des personnes dans le besoin. Si vous souhaitez soutenir notre organisation et aider à faire une différence dans la vie des personnes que nous aidons, faire un don est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment faire un don et pourquoi cela est important pour notre organisation.",
    "button_title":"Faire un don",
    }}]

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
                                    {don_text[0]["FR"].title.split("").map((letter) => (
                                    <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                                    ))}
                                </motion.h1>
                        
                            <motion.hr class="linne"
                            variants={lineVariants}
                            initial="initial"
                            whileInView="animate"
                            exit="exit"
                            key={2}/>
                                <p>{don_text[0]["FR"].intro}</p>
                                <div className='button'>
                                    <button>{don_text[0]["FR"].title}
                                    </button>
                        </div>
                                
                        </div>

                        
          </div>
         

        
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Agir_nous)