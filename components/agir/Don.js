import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence  } from "framer-motion"
import {faire_don_text} from '../../public/static/text/agir/faire_don'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
export const Don = (props) => {
  const router = useRouter()
  
 
  return (
  
     <div className='agir-item'>
        {/* première sous-section */}
        <div className='agir-sous-item inverse'>
          {/* animation pour l'image */}
          <AnimatePresence>
            <motion.div className='agir-image'
                 style={{ backgroundImage: `url(${faire_don_text[1].image})` }}
              initial={{ opacity: 1, x: "20%" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: "0%", transition: { duration: 1 } }}>
            </motion.div>
          </AnimatePresence>
      
          {/* animation pour le texte */}
          <AnimatePresence>
            <motion.div className='agir-text'
              initial={{ opacity: 1, x: "-20%" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: "0%", transition: { duration: 1 } }}>
                <div className='text'>
                <h1 className='h'> {faire_don_text[0][props.langue].title}</h1>
                 <p>{faire_don_text[0][props.langue].intro}</p>

                 <div className='button'>
                   <button onClick={()=> router.push("/contact")}> {faire_don_text[0][props.langue].button}
                  </button>
                </div>
                </div>
                
             
            </motion.div>
          </AnimatePresence>
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

export default connect(mapStateToProps, mapDispatchToProps)(Don)