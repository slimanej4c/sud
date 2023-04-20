import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import {messions ,images ,titles ,aprops,events,figures} from "../../public/static/text/text_index"
export const Accueil_part2 = (props) => {



 
  const mession_itemVariants = {
    hidden: {opacity: 0 ,x:-100 ,y:0},
    visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
  };
  

  return (
    <section className='home-part2'>
              <div className='home-part2-1'>
                <div className='messions-title'>
                  <h1>Messions</h1>
                </div>
                <div
                  className='messions-type'
                  
                 
                >
                  <AnimatePresence key={messions[0][props.langue][0].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][0].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][0].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][1].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][1].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][1].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][2].id}>
                          <motion.div
                          className='mession'
                          key={messions[0][props.langue][0].id}
                          variants={mession_itemVariants}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                          initial='hidden'
                          whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][2].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][2].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][3].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][3].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][3].text}</p>
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