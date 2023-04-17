import Layout from '../hocs/Layout'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux'
import {Set_cookies_redux } from '../Redux'
import {Set_current_image_redux } from '../Redux'

import {messions ,images ,titles ,aprops,events} from "../public/static/text/text_index"


  


function Homme(props)  {

 
 
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
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1 , type: "spring", } },
    };
    
    // Variants pour chaque élément de la liste de missions
    const mession_itemVariants = {
      hidden: { x: -3000 },
      visible: { x: 0, transition: { duration: 1  , type: "spring",} },
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
                            
                            <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                              {titles[0][props.langue][props.current_image].title.split("").map((letter) => (
                                <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                              ))}
                            </motion.h1>
                            <motion.p variants={titleVariants} initial="hidden" whileInView="visible" >
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
                                key={props.current_image}
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
                      
                    
                      <motion.div
                              className='messions-type'
                              variants={messionVariants}
                              initial='hidden'
                              animate='visible'
                            >
                              {messions[0]['fr'].map((item) => {
                                return (
                                  <motion.div
                                    className='mession'
                                    key={item.id}
                                    variants={mession_itemVariants}
                                    transition={{ delay: item.id * 2 }}
                                   
                                  >
                                    <h1>{item.title}</h1>
                                    <p>{item.text}</p>
                                  </motion.div>
                                );
                              })}
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
                <div className='home-part4-title'>
                <h1>Témoignages de bénévoles et de bénéficiaires</h1>
                </div>
               
                <div className='home-figure'>
                <figure className="snip1390">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
                          <figcaption>
                            <h2>Eleanor Crisp</h2>
                            <h4>bénévole</h4>
                            <blockquote>Je suis fier de faire partie de Soladirité, une association qui s'engage à améliorer la vie des enfants en difficulté à travers l'accès à l'éducation, la santé, l'eau potable et l'aide alimentaire. En travaillant en collaboration avec des partenaires locaux, nous avons réussi à faire une réelle différence dans la vie des enfants les plus vulnérables de la société</blockquote>
                          </figcaption>
                        </figure>
                <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
                        <figcaption>
                          <h2>Gordon Norman</h2>
                          <h4>bénéficiaire</h4>
                          <blockquote>Grâce à l'aide de Solidarité, mes enfants ont maintenant accès à une alimentation saine et équilibrée, ainsi qu'à l'éducation. Je suis vraiment reconnaissant pour tout ce que l'association a fait pour nous. </blockquote>
                        </figcaption>
                </figure>
                <figure className="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
                        <figcaption>
                          <h2>Sue Shei</h2>
                          <h4>bénévole</h4>
                          <blockquote>Travailler en tant que bénévole pour Soladirité a été une expérience extrêmement gratifiante. Pouvoir contribuer à améliorer la vie des enfants défavorisés en leur offrant des opportunités d'éducation, de santé et d'aide alimentaire est une source de fierté et de satisfaction pour moi</blockquote>
                        </figcaption>
                </figure>
                <figure className="snip1390">
                          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" className="profile" />
                          <figcaption>
                            <h2>Eleanor Crisp</h2>
                            <h4>bénévole</h4>
                            <blockquote>En tant que bénévole pour Soladirité, j'ai pu découvrir l'impact positif que peut avoir une association à but non lucratif. En travaillant avec passion et dévouement pour aider les enfants en difficulté, j'ai non seulement aidé à changer leur vie, mais j'ai également enrichi la mienne</blockquote>
                          </figcaption>
                        </figure>
                <figure className="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" className="profile" />
                        <figcaption>
                          <h2>Gordon Norman</h2>
                          <h4>bénéficiaire</h4>
                          <blockquote>La collaboration de Solidarité avec les partenaires locaux est remarquable. Ils travaillent ensemble pour fournir de l'eau potable propre et des soins de santé aux enfants dans le besoin. Grâce à leur travail acharné, nous avons vu une amélioration significative de la qualité de vie de nos enfants.</blockquote>
                        </figcaption>
                </figure>
                <figure className="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" className="profile" />
                        <figcaption>
                          <h2>Sue Shei</h2>
                          <h4>bénéficiaire</h4>
                          <blockquote>Je ne sais pas ce que nous ferions sans Solidarité. Ils ont été là pour nous lorsque nous avons perdu notre maison à cause d'une inondation. Grâce à leur aide, nous avons eu accès à un logement temporaire et à de la nourriture pour survivre. Ils ont également aidé nos enfants à retourner à l'école. Nous sommes tellement reconnaissants pour leur soutien et leur aide.</blockquote>
                        </figcaption>
                </figure>
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

export default connect(mapStateToProps, mapDispatchToProps)(Homme)
