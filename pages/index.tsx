import Layout from '../hocs/Layout'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux'
import {Set_cookies_redux } from '../Redux'
import {Set_current_image_redux } from '../Redux'



const images = [{'image': '/static/images/children_home1.jpg', 'color': '#14162F', 'id': 1 ,'fcolor':"#E0A200"},
 {'image': '/static/images/child4.png', 'color': 'black', 'id': 2,'fcolor':"#FF6B09"},
  {'image': '/static/images/hands-home.png', 'color': '#B36330', 'id': 3,'fcolor':"#00FFD6"}]
  const titles = [
    {
      "FR": [
        {"title": "SOLIDARITE SUD", "text": "Ensemble, nous avons le pouvoir de changer des vies"},
        {"title": "AGIR ENSEMBLE", "text": "Ensemble, nous sommes plus forts pour relever les défis"},
        {"title": "CONSTRUIRE L'AVENIR", "text": "Ensemble, nous pouvons bâtir un monde meilleur"}
      ],
      "ENG": [
        {"title": "SOUTHERN SOLIDARITY", "text": "Together, we have the power to change lives"},
        {"title": "ACTING TOGETHER", "text": "Together, we are stronger to face challenges"},
        {"title": "BUILDING THE FUTURE", "text": "Together, we can build a better world"}
      ],
      "DE": [
        {"title": "SOLIDARITÄT SÜD", "text": "Gemeinsam haben wir die Macht, Leben zu verändern"},
        {"title": "ZUSAMMEN HANDELN", "text": "Gemeinsam sind wir stärker, um Herausforderungen zu meistern"},
        {"title": "DIE ZUKUNFT GESTALTEN", "text": "Gemeinsam können wir eine bessere Welt aufbauen"}
      ]
    }
  ]
  

const aprops=[{"FR":{"title":"APROPS","text":" Soladirité est une association à but non lucratif qui travaille pour améliorer la vie des enfants en difficulté. Notre objectif est d'aider les enfants à travers divers programmes tels que l'aide alimentaire, l'accès à l'eau potable, l'éducation et la santé. Nous travaillons avec des partenaires locaux pour nous assurer que nos projets ont un impact positif et durable sur les communautés que nous aidons. Nous croyons que chaque enfant mérite une chance de réussir, et nous sommes déterminés à faire notre part pour y parvenir. Rejoignez-nous dans notre mission pour faire une différence dans la vie des enfants du monde entier."},
"ENG":{"title":"APROPS","text":"Soladirité is a non-profit organization working to improve the lives of disadvantaged children. Our goal is to help children through various programs such as food aid, access to clean water, education, and health. We work with local partners to ensure that our projects have a positive and lasting impact on the communities we serve. We believe that every child deserves a chance to succeed, and we are committed to doing our part to make that happen. Join us in our mission to make a difference in the lives of children around the world."},
"DE":{"title":"APROPS","text":"Soladirité ist eine gemeinnützige Organisation, die daran arbeitet, das Leben benachteiligter Kinder zu verbessern. Unser Ziel ist es, Kindern durch verschiedene Programme wie Lebensmittelhilfe, Zugang zu sauberem Wasser, Bildung und Gesundheit zu helfen. Wir arbeiten mit lokalen Partnern zusammen, um sicherzustellen, dass unsere Projekte eine positive und nachhaltige Wirkung auf die von uns unterstützten Gemeinden haben. Wir glauben, dass jedes Kind eine Chance verdient, erfolgreich zu sein, und wir sind entschlossen, unseren Beitrag dazu zu leisten. Schließen Sie sich unserer Mission an, einen Unterschied im Leben von Kindern auf der ganzen Welt zu machen."}}]
const a={'r':"FR"}
function Home(props)  {

 
 
    const [currentImage, setCurrentImage] = useState(0);
    const [currentEvent, setcurrentEvent] = useState(0);
    const [y_init, sety_init] = useState('0%');
    const [y_exit, sety_exit] = useState('-100%');
    const [y_init_image, sety_init_image] = useState('100%');
    const [y_exit_image, sety_exit_image] = useState('0%');
    const [stop_auto, setstop_auto] = useState(true);


  
   
  
  
      useEffect(() => {
      
   console.log('langue changed to', props.langue ,props.cookies_accepted)
  

  }, [props.langue]);

   
  

    
    const messions=[{fr:[{id:1,title:'Aide alimentaire',text:"Nous fournissons des repas nutritifs aux enfants en situation demalnutrition dans les communautéslocales, afin de leur assurer une alimentation adéquatepour leur développement",image:'/static/images/children_home1.jpg'},
    {id:2,title:"Accès à l'eau potable",text:"Nous travaillons pour améliorer l'accès à l'eau potable dans les régions où l'eau est rare ou contaminée, en installant des puits, des systèmes de filtration ou en formant des personnes pour gérer les ressources en eau",image:'/static/images/children_home1.jpg'},
    {id:3,title:'Santé',text:"Nous travaillons pour améliorer l'accès aux soins de santé, en offrant des soins médicaux gratuits ou à faible coût, en organisant des campagnes de sensibilisation à la santé et en formant des professionnels de la santé locaux",image:'/static/images/children_home1.jpg'}
    ]}]
const events=[{fr:[{id:1,title:'soirée caritative pour collecter des fonds',text:"L'association de solidarité JKL organise une soirée caritative pour collecter des fonds en faveur de leur programme d'aide alimentaire pour les personnes les plus vulnérables de notre communauté.L'événement aura lieu le samedi 10 juillet au centre-ville. La soirée débutera par un cocktail de bienvenue suivi d'un dîner préparé par des chefs locaux renommés. Les participants pourront également profiter de la musique live, de divertissements et de jeux pour gagner des prix tout au long de la soirée.Des bénévoles de l'association seront présents pour expliquer les détails du programme d'aide alimentaire et comment les fonds collectés lors de la soirée seront utilisés pour aider les personnes dans le besoin.Les billets pour l'événement sont en vente dès maintenant et toutes les recettes iront directement à l'association JKL pour financer leur programme d'aide alimentaire. C'est une excellente occasion de profiter d'une soirée agréable tout en faisant une différence dans la vie des personnes les plus vulnérables de notre communauté.",
image:"/static/images/event1.png"},
{id:2,title:"Accès à l'eau potable",text:"Nous travaillons pour améliorer l'accès à l'eau potable dans les régions où l'eau est rare ou contaminée, en installant des puits, des systèmes de filtration ou en formant des personnes pour gérer les ressources en eau",
image:"/static/images/child2.png"},
{id:3,title:'Santé',text:"Nous travaillons pour améliorer l'accès aux soins de santé, en offrant des soins médicaux gratuits ou à faible coût, en organisant des campagnes de sensibilisation à la santé et en formant des professionnels de la santé locaux",
image:"/static/images/child2.png"}
]}]
  
  const change_event = (myParam) => {
    setstop_auto(false)
     if (myParam==="next"){
      { currentEvent===events[0]['fr'].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
      props.Set_cookies_redux(true)
      sety_init('100%')
      sety_init_image('-100%')
    
     }
     else{
      { currentEvent===0 ?  setcurrentEvent(events[0]['fr'].length-1)  : setcurrentEvent(currentEvent-1)}
      props.Set_cookies_redux(false)
      sety_init('-100%')
      sety_init_image('100%')
    
     }
  
     console.log(currentEvent,myParam,'hi')
  };
    useEffect(() => {
      const interval = setInterval(() => {
        {props.current_image>=images.length-1 ? props.Set_current_image_redux(0) :props.Set_current_image_redux(props.current_image+1)}
       
       // setCurrentImage(currentImage => (currentImage + 1) % images.length);
       
      }, 8000);
      return () => clearInterval(interval);
    }, [props.current_image ]);
    useEffect(() => {
      const interval = setInterval(() => {
     
      if (stop_auto){
        { currentEvent===events[0]['fr'].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
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
    const titleVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.9,
        transition: {
          staggerChildren: 0.05,
        },
      },
    };
    const titleVariants2 = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.9,
        transition: {
          staggerChildren: 0.009,
        },
      },
    };
 
    const letterVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
          // ou
          ease: (t) => t * t, // utiliser une fonction
        },
      },
    };
  
    const messionVariants = {
      hidden: {  opacity:0 },
      visible: {
        
        opacity:1 ,
        transition: {
          
          duration: 0,
          type: "spring",
          stiffness: 100,
         
          mass: 0.5,
          damping: 10,
          staggerChildren: 0.1,
          delayChildren: 0.5,
        },
      },
    };
    
    const mession_itemVariants = {
      hidden: { x: "-200%", opacity: 0.5 },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
         
          duration: 3,
          
          type: "spring",
          stiffness: 100,
          mass: 0.5,
          damping: 10,
          staggerChildren: 0.1,
          delayChildren: 0.5,
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
                  <div className='home-part1-1'    style={{ backgroundColor:`${images[currentImage].color}`,color:`${images[currentImage].fcolor}` , transition: 'background-color 3s ease'}}>

                  
                  <div className="presentation-title"  >
                  <AnimatePresence key={props.current_image}  >
                            
                            <motion.h1 variants={titleVariants} initial="hidden" animate="visible">
                              {titles[0][props.langue][props.current_image].title.split("").map((letter) => (
                                <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.h1>
                            <motion.p variants={titleVariants} initial="hidden" animate="visible" >
                            {titles[0][props.langue][props.current_image].text.split("").map((letter) => (
                                <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                              ))}
                             
                            </motion.p>
                  </AnimatePresence>
    </div>
                          <div   className="presentation-img">
                                  <AnimatePresence>
                                  <motion.div
                                className="presentation-sous-img"
                                style={{backgroundImage: `url(${images[props.current_image].image})` }}
                                variants={imageVariants}
                                initial="initial"
                                whileInView="animate"
                                exit="exit"
                                key={currentImage}
                              /> 
                              </AnimatePresence>
                        </div>
                  </div>
                  <div className='home-part1-2'>
                        <div className='presentation-aprops'>
                             
                               

                            <motion.h1 variants={titleVariants} initial="hidden" animate="visible">
                              {aprops[0][props.langue].title.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.h1>
    
                            <motion.p variants={titleVariants2} initial="hidden" animate="visible" >
                             
                              {aprops[0][props.langue].text.split("").map((letter, index) => (
                                <motion.span key={index} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.p>
                            
                        </div>
                  </div>
               </div>
               <div className='home-part2'>

                          
                    <div className='home-part2-1'>
                      <div className='messions-title'>
                              <h1>Messions</h1>
                      </div>
                      
                      <motion.div className='messions-type' 
                      variants={messionVariants}
                      initial="hidden"
                      whileInView="visible"
                      >
                        {
                          messions[0]['fr'].map((items=>{
                            return(
                              <motion.div className='mession' key={items.id}
                               variants={mession_itemVariants}
                              // style={{backgroundImage: `url(${items.image})` }}
                      >
                                <h1>{items.title}</h1>
                                <p>{items.text}</p>
                              </motion.div>
                            )
                          }))
                        }

                      </motion.div>

                    </div>
              </div>

              <div className='home-part3'>

                  <div className='home-part3-1'>
                        <h1>Actualités et événements</h1>

                  </div>

                  <div className='home-part3-2'>
                          <AnimatePresence >
                              <motion.div className='home-part3-2-image'
                                style={{backgroundImage: `url(${events[0]["fr"][currentEvent].image})`}}
                                variants={image_eventVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                key={events[0]["fr"][currentEvent].image}
                               >

                              </motion.div>
                         
                                <motion.div className='home-part3-2-text'
                                variants={textVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                               key={events[0]['fr'][currentEvent].title}
                                onAnimationComplete={definition => {
                                  console.log('Completed animating', definition)
                                
                                
                                }}
                                >
                                  <div className='home-part3-2-text-div'>
                                  
                                        <h1>
                                        {events[0]['fr'][currentEvent].title}
                                        </h1>
                                        <p>
                                          {events[0]['fr'][currentEvent].text}
                                        </p>
                                        </div>
                                 
                                </motion.div>
                          </AnimatePresence>
                          <div className='home-part3-help1'   style={{backgroundImage: `url(${events[0]['fr'][currentEvent].image})`}}>
                             

                          </div>
                          
                          <div className='home-part3-help2'>
                                  
                                  <h1>
                                  {events[0]['fr'][currentEvent].title}
                                  </h1>
                                  <p>
                                    {events[0]['fr'][currentEvent].text}
                                  </p>
                          </div>

                  </div>
                  <div className='home-part3-3'>
                    <div className='home-part3-3-index'>
                    {events[0]['fr'].map((index)=>{
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

const mapStateToProps = (state) => ({
  langue:state.change_langue_reducer.langue,
  cookies_accepted:state.change_langue_reducer.cookies_accepted,
  current_image:state.change_langue_reducer.current_image,
})

const mapDispatchToProps = dispatch =>{
return{
 
  Set_cookies_redux:(val)=>dispatch(Set_cookies_redux(val)),
  Set_current_image_redux:(val)=>dispatch(Set_current_image_redux(val)),

}

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
