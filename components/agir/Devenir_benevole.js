import React from 'react'
import { connect } from 'react-redux'
import { motion, AnimatePresence  } from "framer-motion"

import { useState, useEffect } from "react";
export const Devenir_benevole = (props) => {
  
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
const image2_Variants =  {
    initial: {
      opacity: 0,
      y: '0%'
    },
    animate: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: "0%",
      transition: {
        duration: 1,
      },
    },
  }
  useEffect(() => {
    
    console.log('ismobile...',isMobile)
    console.log('ismobile...',isMobile)
    console.log('ismobile...',isMobile)
    console.log('ismobile...',isMobile)
}, [isMobile  ]);
return (
    <div className='d-part1'>
      <div  className='d-part1-0'>
             <div  className='d-part1-title'>
                 <h1 className='h'> {benevole_text[0]["FR"].title}</h1>
             </div>
      </div>
      <div className='d-part1-1'>
      <AnimatePresence>
          <motion.div className='d-part1-1-1'
           initial= {{opacity: 1,x:"20%"}}
       
       viewport={{ once: true }}
       whileInView={{opacity: 1 ,x:"0%" , transition:{ duration: 1,},}}>
                
            
          </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div className='d-part1-1-2'
             initial= {{opacity: 1,x:"-20%"}}
       
             viewport={{ once: true }}
             whileInView={{opacity: 1 ,x:"0%" , transition:{ duration: 1,},}}
            >
         
            <h1> {benevole_text[0]["FR"].intro_title}</h1>
                <p>{benevole_text[0]["FR"].intro}</p>
              
              
            </motion.div>
            </AnimatePresence>
       </div>
       <div className='d-part1-2'>
       <AnimatePresence>
       <motion.div className='d-part1-2-1'
        variants={image2_Variants }
        initial="initial"
       
        viewport={{ once: true }}
        whileInView="animate"
        exit="exit"
        key={1}>
         
            <h1> {benevole_text[0]["FR"].intro_title2}</h1>
                <p>{benevole_text[0]["FR"].intro2}</p>
                <button> Devenez bénévole
                </button>
            </motion.div>
        </AnimatePresence>
        <div className='d-part1-2-2'>
         
       
         </div>

       </div>
        
    </div>
  )
  }
const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Devenir_benevole)