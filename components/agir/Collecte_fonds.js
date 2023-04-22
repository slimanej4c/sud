import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence  } from "framer-motion"

export const Collecte_fonds = (props) => {
 
    const don_text=[{"FR":{title:"Faire un don","intro":"Faire un don est un acte important et généreux qui peut faire une grande différence dans la vie des personnes dans le besoin. Si vous souhaitez soutenir notre organisation et aider à faire une différence dans la vie des personnes que nous aidons, faire un don est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment faire un don et pourquoi cela est important pour notre organisation.",
"button_title":"Faire un don",
}}]
  return (
  
     <div className='agir-item'>
        {/* première sous-section */}
        <div className='agir-sous-item inverse'>
          {/* animation pour l'image */}
          <AnimatePresence>
            <motion.div className='agir-image'
                 style={{ backgroundImage: `url(${"/static/images/collecter.jpg"})` }}
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
                <h1 className='h'> {don_text[0]["FR"].title}</h1>
                 <p>{don_text[0]["FR"].intro}</p>
                 <div className='button'>
                <button> Faire un don
                </button>
                </div>
                </div>
              
             
            </motion.div>
          </AnimatePresence>
        </div>
      
       
      </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Collecte_fonds)