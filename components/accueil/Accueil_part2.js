import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import {missions_text ,missions_title ,missions_image} from '../../public/static/text/accueil/missions'

export const Accueil_part2 = (props) => {



 
  const mession_itemVariants = {
    hidden: {opacity: 0 ,x:-100 ,y:0},
    visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
  };
  

  return (
    <section className='home-part2'>
              <div className='home-part2-1'>
                <div className='messions-title'>
                  <h1>{missions_title[0][props.langue]}</h1>
                </div>
                <div
                  className='messions-type'
                  
                 
                >
                  <AnimatePresence key={missions_text[0][props.langue]}>
                          <motion.div
                            className='mession'
                            key={missions_text[0][props.langue]}
                            variants={mession_itemVariants}
                        
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                            style={{ backgroundImage:  `url(${missions_image[0].image})`  }}
                          >
                          
                            <div className='mession-text'>
                              <p>{missions_text[0][props.langue]}</p>
                              <div className='button' >
                                  <button > {missions_title[1][props.langue]}
                                  </button>
                              </div>
                            </div>
                            
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={missions_text[1][props.langue]}>
                          <motion.div
                            className='mession'
                            key={missions_text[1][props.langue]}
                            variants={mession_itemVariants}
                            style={{ backgroundImage:  `url(${missions_image[2].image})`  }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                         
                            <div className='mession-text'>
                              <p>{missions_text[1][props.langue]}</p>
                              <div className='button' >
                                  <button > {missions_title[1][props.langue]}
                                  </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={missions_text[3][props.langue]}>
                          <motion.div
                          className='mession'
                          key={missions_text[3][props.langue]}
                          variants={mession_itemVariants}
                          style={{ backgroundImage:  `url(${missions_image[1].image})`  }}
                          viewport={{ once: true }}
                          initial='hidden'
                          whileInView='visible'
                          >
                           
                            <div className='mession-text'>
                              <p>{missions_text[3][props.langue]}</p>
                              <div className='button' >
                                  <button > {missions_title[1][props.langue]}
                                  </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={missions_text[4][props.langue]}>
                          <motion.div
                            className='mession'
                            key={missions_text[4][props.langue]}
                            variants={mession_itemVariants}
                            style={{ backgroundImage:  `url(${missions_image[3].image})`  }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                       
                            <div className='mession-text'>
                              <p>{missions_text[4][props.langue]}</p>
                              <div className='button' >
                                  <button > {missions_title[1][props.langue]}
                                  </button>
                              </div>
                            </div>
                          </motion.div>
                        </AnimatePresence>

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
   
 
  
  }
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Accueil_part2)