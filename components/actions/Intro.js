import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence  } from "framer-motion"
import { intro_text } from '../../public/static/text/actions/intro'
export const Intro = (props) => {


  return (
  
     <div className='action-item'>
        {/* première sous-section */}
        <h1></h1>
        <div className='action-sous-item '>
          {/* animation pour l'image */}
          <AnimatePresence>
            <motion.div className='action-video'
                
              initial={{ opacity: 1, x: "20%" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: "0%", transition: { duration: 1 } }}>
            <video autoPlay muted loop className="bg-video" >
  <source src={intro_text[1].video} type="video/mp4"/>
</video>
            </motion.div>
          </AnimatePresence>
      
          {/* animation pour le texte */}
          <AnimatePresence>
            <motion.div className='action-text'
              initial={{ opacity: 1, x: "-20%" }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: "0%", transition: { duration: 1 } }}>
                <div className='text'>
                <h1 className='h'> {intro_text[0][props.langue].title}</h1>
                 <p>{intro_text[0][props.langue].texte}</p>
               
                 <div className='button'>
                <button> {intro_text[0][props.langue].button}
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

export default connect(mapStateToProps, mapDispatchToProps)(Intro)