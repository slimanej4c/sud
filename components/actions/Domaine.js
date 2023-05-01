import React from 'react'
import { useState, useEffect } from "react";
import { connect } from 'react-redux'
import { motion, AnimatePresence } from "framer-motion"
import { domaine_intervention_text } from '../../public/static/text/actions/domaine_intervention';

export const Domaine = (props) => {
  

 
    const domaine_itemVariants = {
        hidden: {opacity: 0 ,x:-100 ,y:0},
        visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
      };
      
    
      return (
        <section className='domaine-part2'>
                  <div className='domaine-part2-1'>
                    <div className='domaine-title'>
                   
                      <h1>{ domaine_intervention_text[1][props.langue].title} </h1>
                    </div>
                    <div
                      className='domaine-type'
                      
                     
                    >
                      <AnimatePresence key={ domaine_intervention_text[0][props.langue][0].id}>
                              <motion.div
                                className='domaine'
                                key={ domaine_intervention_text[0][props.langue][0].id}
                                variants={domaine_itemVariants}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                initial='hidden'
                                whileInView='visible'
                              >
                                <div className='domaine-title'>
                                  <h1>{ domaine_intervention_text[0][props.langue][0].title}</h1>
                                </div>
                                <div className='domaine-text'>
                                  <p>{ domaine_intervention_text[0][props.langue][0].text}</p>
                                </div>
                              </motion.div>
                            </AnimatePresence>
    
                            <AnimatePresence key={ domaine_intervention_text[0][props.langue][1].id}>
                              <motion.div
                                className='domaine'
                                key={ domaine_intervention_text[0][props.langue][0].id}
                                variants={domaine_itemVariants}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                initial='hidden'
                                whileInView='visible'
                              >
                                <div className='domaine-title'>
                                  <h1>{ domaine_intervention_text[0][props.langue][1].title}</h1>
                                </div>
                                <div className='domaine-text'>
                                  <p>{ domaine_intervention_text[0][props.langue][1].text}</p>
                                </div>
                              </motion.div>
                            </AnimatePresence>
    
                            <AnimatePresence key={ domaine_intervention_text[0][props.langue][2].id}>
                              <motion.div
                              className='domaine'
                              key={ domaine_intervention_text[0][props.langue][0].id}
                              variants={domaine_itemVariants}
                              whileHover={{ scale: 1.05 }}
                              viewport={{ once: true }}
                              initial='hidden'
                              whileInView='visible'
                              >
                                <div className='domaine-title'>
                                  <h1>{ domaine_intervention_text[0][props.langue][2].title}</h1>
                                </div>
                                <div className='domaine-text'>
                                  <p>{ domaine_intervention_text[0][props.langue][2].text}</p>
                                </div>
                              </motion.div>
                            </AnimatePresence>
    
                            <AnimatePresence key={ domaine_intervention_text[0][props.langue][3].id}>
                              <motion.div
                                className='domaine'
                                key={ domaine_intervention_text[0][props.langue][0].id}
                                variants={domaine_itemVariants}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                                initial='hidden'
                                whileInView='visible'
                              >
                                <div className='domaine-title'>
                                  <h1>{ domaine_intervention_text[0][props.langue][3].title}</h1>
                                </div>
                                <div className='domaine-text'>
                                  <p>{ domaine_intervention_text[0][props.langue][3].text}</p>
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
export default connect(mapStateToProps, mapDispatchToProps)(Domaine)