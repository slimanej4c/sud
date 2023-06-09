import React ,{useState} from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
import { motion, AnimatePresence } from "framer-motion"

import {faLocationDot ,faPhone ,faMobilePhone ,faEnvelope ,faBank ,faMoneyBill

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
export const contact = (props) => {
  const [name, setname] = useState("")
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11 
  };

  const handleSubmit=()=>{
    console.log('clicked')

  }

  const formVariants = {
    hidden: {opacity: 0 ,x:200 ,y:0},
    visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
  };
  const bankVariants = {
    hidden: {opacity: 0 ,x:-200 },
    visible: { opacity: 1, x:0,  transition: { duration: 2  , type: "spring",} },
  };

  return (
    <Layout>
   
     <div className='contact-page'>
      <div className='contact-all'>
            <section className='contact-top'>
                <div className='contact-info'>
                    <div className='contact-info-image'>

                    </div>
               
                    <div className='contact-info-text'>
                    <ul>
                
                  <li> <FontAwesomeIcon icon={faLocationDot}  className="contact-icon"/> xxxx , XXXXX  XXXXXX (SUISSE)</li>
                  <li> <FontAwesomeIcon icon={faPhone}  className="contact-icon"/> +XX XX XX XXX XX</li>
                  <li> <FontAwesomeIcon icon={faMobilePhone}  className="contact-icon"/> +XX XX XX XXX XX</li>
                  <li> <FontAwesomeIcon icon={faEnvelope}  className="contact-icon"/> solidarit@domaine.com</li>
                </ul>

                    </div>

                </div>
                <AnimatePresence key={1}>
                <motion.div className='contact-form'
                 variants={formVariants}
                 viewport={{ once: true }}
                 initial='hidden'
                 whileInView='visible'
            
                >
                  <h1>Nous Contacter</h1>
                  <form
                            
                            onSubmit={handleSubmit}
                            className="contact-form-form"
                           
                          >
                            <div className="contact-div">
                          
                              <input
                                type="text"
                                placeholder="Your name"
                                name="name"
                                className="contact-item"
                                value={props.name}
                                onChange={event => setname(event.target.value)}
                                required
                              />
                            </div>
                            <div className="contact-div">
                              <input
                                type="text"
                                placeholder="Your Tel"
                                name="name"
                                className="contact-item"
                                required
                              />
                            </div>
                            <div className="contact-div">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="contact-item"
                                required
                              />
                            </div>
                            <div className="contact-div">
                              <textarea
                                placeholder="Your message"
                                name="message"
                                className="contact-item contact-message"
                                required
                              />
                            </div>
                            <div className="contact-button-div">
                              <button
                                className="contact-button"
                                type="submit"
                              >
                                ENVOYER
                              </button>
                            </div>
                   </form>
                  
                </motion.div>
                </AnimatePresence>
            
            </section>
          
            <section className='contact-bottom'>
         
              <AnimatePresence key={2}>
                <motion.div className='contact-bank-info'
                 variants={bankVariants}
                 viewport={{ once: true }}
                 initial='hidden'
                 whileInView='visible'>
               
                   <h1> Coordonnées bancaires </h1>
                   
                   <div className='contact-bank-section' >
                   <FontAwesomeIcon icon={faBank}  className="contact-icon bank"/>
                   <ul>
                      <li> XXXXXX BANK</li>
                      <li>XXXXX -XXXXXX</li>
                      <li>SOLIDARITé</li>
                      <li>IBAN XXXX 0000 0000 0000 0000 0</li>
                      <li>XXXXXXXXXXX XX – XXXX XXXXX</li>
                    </ul>
                   </div>
                   

                </motion.div>
                </AnimatePresence>
              
            </section>
      </div>
     </div>

    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(contact)