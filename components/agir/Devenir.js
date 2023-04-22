import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence  } from "framer-motion"

import { useState, useEffect } from "react";
export const Devenir = (props) => {
    const benevole_text=[{"FR":{title:"Agir avec nous","intro":"En tant qu'organisation à but non lucratif, notre travail repose en grande partie sur le soutien et l'engagement des bénévoles. Sans le dévouement de notre communauté de bénévoles, nous ne pourrions pas réaliser notre mission. Si vous cherchez un moyen de donner de votre temps et de vos compétences pour soutenir une bonne cause, devenir bénévole est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment devenir bénévole pour notre organisation",
    "intro_title":"Devenez bénévole pour notre organisation à but non lucratif.","intro_title2":"Devenez bénévole","intro2":" si vous cherchez à donner de votre temps et de vos compétences pour soutenir une bonne cause, devenir bénévole pour notre organisation est un excellent moyen de le faire. Contactez-nous pour exprimer votre intérêt et nous serons ravis de discuter avec vous de la façon dont vous pouvez vous impliquer. Nous avons hâte de travailler avec vous pour réaliser notre mission commune.",
    }}]
    
    const [isMobile, setIsMobile] = useState(false);

    
      useEffect(() => {
     
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
        
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isMobile]);

    return (
        <div className='agir-item'>
        {/* première sous-section */}
        <div className='agir-sous-item'>
          {/* animation pour l'image */}
          <AnimatePresence>
            <motion.div className='agir-image'
           
              style={{ backgroundImage: `url(${"/static/images/benevole.jpg"})` }}
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
                   <h1>{benevole_text[0]["FR"].intro_title}</h1>
                   <p>{benevole_text[0]["FR"].intro}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Devenir)