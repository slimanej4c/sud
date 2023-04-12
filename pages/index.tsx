import Layout from '../hocs/Layout'
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";

const images = [ "/static/images/child2.png", "/static/images/child4.png"];

export default function Home()  {

    const [currentImage, setCurrentImage] = useState(0);
    const [currentEvent, setcurrentEvent] = useState(0);
    const [y_init, sety_init] = useState('0%');
    const [y_exit, sety_exit] = useState('-100%');
    const [y_init_image, sety_init_image] = useState('100%');
    const [y_exit_image, sety_exit_image] = useState('0%');
    const [stop_auto, setstop_auto] = useState(true);
    
    const messions=[{id:1,title:'Aide alimentaire',text:"Nous fournissons des repas nutritifs aux enfants en situation demalnutrition dans les communautéslocales, afin de leur assurer une alimentation adéquatepour leur développement"},
    {id:2,title:"Accès à l'eau potable",text:"Nous travaillons pour améliorer l'accès à l'eau potable dans les régions où l'eau est rare ou contaminée, en installant des puits, des systèmes de filtration ou en formant des personnes pour gérer les ressources en eau"},
    {id:3,title:'Santé',text:"Nous travaillons pour améliorer l'accès aux soins de santé, en offrant des soins médicaux gratuits ou à faible coût, en organisant des campagnes de sensibilisation à la santé et en formant des professionnels de la santé locaux"}
]
const events=[{id:1,title:'soirée caritative pour collecter des fonds',text:"L'association de solidarité JKL organise une soirée caritative pour collecter des fonds en faveur de leur programme d'aide alimentaire pour les personnes les plus vulnérables de notre communauté.L'événement aura lieu le samedi 10 juillet au centre-ville. La soirée débutera par un cocktail de bienvenue suivi d'un dîner préparé par des chefs locaux renommés. Les participants pourront également profiter de la musique live, de divertissements et de jeux pour gagner des prix tout au long de la soirée.Des bénévoles de l'association seront présents pour expliquer les détails du programme d'aide alimentaire et comment les fonds collectés lors de la soirée seront utilisés pour aider les personnes dans le besoin.Les billets pour l'événement sont en vente dès maintenant et toutes les recettes iront directement à l'association JKL pour financer leur programme d'aide alimentaire. C'est une excellente occasion de profiter d'une soirée agréable tout en faisant une différence dans la vie des personnes les plus vulnérables de notre communauté.",
image:"/static/images/event1.png"},
{id:2,title:"Accès à l'eau potable",text:"Nous travaillons pour améliorer l'accès à l'eau potable dans les régions où l'eau est rare ou contaminée, en installant des puits, des systèmes de filtration ou en formant des personnes pour gérer les ressources en eau",
image:"/static/images/child2.png"},
{id:3,title:'Santé',text:"Nous travaillons pour améliorer l'accès aux soins de santé, en offrant des soins médicaux gratuits ou à faible coût, en organisant des campagnes de sensibilisation à la santé et en formant des professionnels de la santé locaux",
image:"/static/images/child2.png"}
]
  
  const change_event = (myParam) => {
    setstop_auto(false)
     if (myParam==="next"){
      { currentEvent===events.length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
      sety_init('100%')
      sety_init_image('-100%')
    
     }
     else{
      { currentEvent===0 ?  setcurrentEvent(events.length-1)  : setcurrentEvent(currentEvent-1)}
   
      sety_init('-100%')
      sety_init_image('100%')
    
     }
  
     console.log(currentEvent,myParam)
  };
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
       
      }, 8000);
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      const interval = setInterval(() => {
     
      if (stop_auto){
        { currentEvent===events.length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
        sety_init('100%')
      sety_init_image('-100%')
      }
       
      }, 8000);
      return () => clearInterval(interval);
    }, [currentEvent]);
    const imageVariants = {
      initial: {
        opacity: 0,
        x: '100%',
      },
      animate: {
        opacity: 1,
        x: '0%',
        transition: {
          duration: 3,
        },
      },
      exit: {
        opacity: 0,
        x: '-100%',
        transition: {
          duration: 3,
        },
      },
    };
    const textVariants = {
      initial: {
        opacity: 0,
        y: y_init,
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
        y: y_exit,
        transition: {
          duration: 1,
        },
      },
    };

    const image_eventVariants = {
      initial: {
        opacity: 0,
        y: y_init_image,
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
        y: y_exit_image,
        transition: {
          duration: 1,
        },
      },
    };
    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
          <div className='home-all-part'>
                <div className='home-part1'>
                  <div className='home-part1-1'>

                  
                        <div className='presentation-title'>
                                <h1>SOLIDARITE SUD</h1>
                                <p >
                                Ensemble, nous avons le<br/>
                                      pouvoir de changer des vie
                                    </p>
                            </div>
                          <div   className="presentation-img">
                                  <AnimatePresence>
                                  <motion.div
                                className="presentation-sous-img"
                                style={{backgroundImage: `url(${images[currentImage]})`}}
                                variants={imageVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                key={currentImage}
                              /> 
                              </AnimatePresence>
                        </div>
                  </div>
                  <div className='home-part1-2'>
                        <div className='presentation-aprops'>
                                <h1>APROPS</h1>
                                    <p >
                                    Soladirité est une association à but non lucratif qui travaille pour améliorer la vie des enfants en difficulté.
                                    Notre objectif est d'aider les enfants à travers divers programmes tels que l'aide alimentaire, l'accès à l'eau potable,
                                      l'éducation et la santé. Nous travaillons avec des partenaires locaux pour nous assurer que nos projets ont un impact positif 
                                      et durable sur les communautés que nous aidons. Nous croyons que chaque enfant mérite une chance de réussir, et nous sommes déterminés à faire notre part pour y parvenir. 
                                    Rejoignez-nous dans notre mission pour faire une différence dans la vie des enfants du monde entier
                                        </p>
                            
                        </div>
                  </div>
               </div>
               <div className='home-part2'>

                          
                    <div className='home-part2-1'>
                      <div className='messions-title'>
                              <h1>Messions</h1>
                      </div>
                      
                      <div className='messions-type'>
                        {
                          messions.map((items=>{
                            return(
                              <div className='mession' key={items.id}>
                                <h1>{items.title}</h1>
                                <p>{items.text}</p>
                              </div>
                            )
                          }))
                        }

                      </div>

                    </div>
              </div>

              <div className='home-part3'>

                  <div className='home-part3-1'>
                        <h1>Actualités et événements</h1>

                  </div>

                  <div className='home-part3-2'>
                          <AnimatePresence key={currentEvent}>
                              <motion.div className='home-part3-2-image'
                                style={{backgroundImage: `url(${events[currentEvent].image})`}}
                                variants={image_eventVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                               >

                              </motion.div>
                         
                                <motion.div className='home-part3-2-text'
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                              
                                onAnimationComplete={definition => {
                                  console.log('Completed animating', definition)
                                
                                
                                }}
                                >
                                  <div className='home-part3-2-text-div'>
                                  
                                        <h1>
                                        {events[currentEvent].title}
                                        </h1>
                                        <p>
                                          {events[currentEvent].text}
                                        </p>
                                        </div>
                                 
                                </motion.div>
                          </AnimatePresence>
                          <div className='home-part3-help1'   style={{backgroundImage: `url(${events[currentEvent].image})`}}>
                             

                          </div>
                          
                          <div className='home-part3-help2'>
                                  
                                  <h1>
                                  {events[currentEvent].title}
                                  </h1>
                                  <p>
                                    {events[currentEvent].text}
                                  </p>
                          </div>

                  </div>
                  <div className='home-part3-3'>
                    <div className='home-part3-3-index'>
                    {events.map((index)=>{
                                let backgroundColor = 'green';
                                if (index.id ===currentEvent+1) {
                                  backgroundColor = '#B64D07';
                                }
                                return(
                                  <div className='home-part3-3-index-div' style={{backgroundColor}}>
                                  </div>
                                )
                              })}
                    </div>
                    <div className='home-part3-buttons'>
                        <button className='home-part3-button prev' onClick={()=>change_event('prev')}>&lt;</button>
                        <button className='home-part3-button next' onClick={()=>change_event('next')}>&gt;</button>

                    </div>
                 
                        

                  </div>

              </div>

              <div className='home-part4'>
                <div>
                  <h1>
                    sdfhskj dfhskjdfh skdfh skjdfhskdfh ssdfbsjhdfbshjfd
                  </h1>
                </div>

              </div>
                
            </div>
        </div>
    </Layout>
    )
};


