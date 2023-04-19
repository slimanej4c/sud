import Layout from '../hocs/Layout'
import { useMediaQuery } from 'react-responsive';
import { motion, AnimatePresence , useMotionValue, useDragControls} from "framer-motion"
import { useState, useEffect } from "react";
import { useAnimation } from 'framer-motion';
import { connect } from 'react-redux'
import {Set_cookies_redux } from '../Redux'
import {Set_current_image_redux } from '../Redux'
import { useInView } from "react-intersection-observer";
import {messions ,images ,titles ,aprops,events,figures} from "../public/static/text/text_index"





function Home(props)  {

  const isSmallScreen = useMediaQuery({ maxWidth: 750 });

    const [currentImage, setCurrentImage] = useState(0);
    const [currentEvent, setcurrentEvent] = useState(0);
    const [currentFigure, setcurrentFigure] = useState(0);
    const [y_init, sety_init] = useState('0%');
    const [y_exit, sety_exit] = useState('-100%');
    const [y_init_image, sety_init_image] = useState('100%');
    const [y_exit_image, sety_exit_image] = useState('0%');
    
    const [stop_auto, setstop_auto] = useState(true);
    const [stop_auto_figure, setstop_auto_figure] = useState(true);
    const [y_exit_figure, sety_exit_figure] = useState('0%');
    const [y_init_figure, sety_init_figure] = useState('100%');

    const apropsVariants = {
      visible: { opacity: 1,x:"0%", transition: { duration: 1  , type: "spring", } },
      hidden: { opacity: 0 ,x:"-100%"}
    };
 
    const dragControls = useDragControls();
    useEffect(() => {
    
   
    }, [y_exit_figure ,dragControls]);
    const handleDragEnd = (event, info) => {
   
        sety_exit_figure('0%')
      if (info.offset.x > 50) {
        // if the user has dragged the image by more than 50 pixels to the right, move to the next figure
        sety_init_figure('-100%')
        sety_exit_figure('0%')
     
        setcurrentFigure((currentFigure - 1 + figures[0][props.langue].length) % figures[0][props.langue].length);
       
       
      } else if (info.offset.x < -50) {
        // if the user has dragged the image by more than 50 pixels to the left, move to the previous figure
        sety_init_figure('100%')
        sety_exit_figure('0%')
        setcurrentFigure((currentFigure + 1) % figures[0][props.langue].length);
        
      }
    };
   
  
      useEffect(() => {
      
   console.log('langue changed to', props.langue ,props.cookies_accepted)
  

  }, [props.langue]);

   
  

    
  

  
  const change_event = (myParam) => {
    setstop_auto(false)
     if (myParam==="next"){
      { currentEvent===events[0][props.langue].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
      props.Set_cookies_redux(true)
      sety_init('100%')
      sety_init_image('-100%')
    
     }
     else{
      { currentEvent===0 ?  setcurrentEvent(events[0][props.langue].length-1)  : setcurrentEvent(currentEvent-1)}
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
        { currentEvent===events[0][props.langue].length-1 ? setcurrentEvent(0)   :  setcurrentEvent(currentEvent+1)}
        sety_init('100%')
      sety_init_image('-100%')
      }
       
      }, 8000);
      return () => clearInterval(interval);
    }, [currentEvent]);

    useEffect(() => {
      const interval = setInterval(() => {
     
      if (stop_auto_figure){
        setcurrentFigure((currentFigure + 1) % figures.length);
        sety_init('100%')
      sety_init_figure('-100%')
      }
       
      }, 10000);
      return () => clearInterval(interval);
    }, [currentFigure]);

    const imageVariants = {
      initial: {
        opacity: 0,
     
      },
      animate: {
        opacity: 1,
      
        transition: {
          duration: 2,
        },
      },
      exit: {
        opacity: 0,
    
        transition: {
          duration: 2,
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
    const image_figuretVariants = {
      initial: {
        opacity: 0,
        x: y_init_figure,
      },
      animate: {
        opacity: 1,
        x: '0%',
        transition: {
          duration: 1,
        },
      },
      exit: {
        opacity: 0,
        x: y_exit_figure,
        transition: {
          duration: 1,
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
      visible: { opacity: 1, transition: { staggerChildren: 0.2 , type: "spring", } },
    };
    
    // Variants pour chaque élément de la liste de missions
   
   
   
    const mession_itemVariants = {
      hidden: {opacity: 0 ,x:-100 ,y:0},
      visible: { opacity: 1, x:0,y:0, transition: { duration: 2  , type: "spring",} },
    };
    

   
    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
          <div className='home-all-part'>
          <section className='home-part1'>
            <div
              className='home-part1-1'
              style={{
                backgroundColor: `${images[currentImage].color}`,
                color: `${images[currentImage].fcolor}`,
                transition: 'background-color 3s ease'
              }}
            >
              <div className="presentation-title">
                <AnimatePresence key={props.current_image}>
                  <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles[0][props.langue][props.current_image].title.split("").map((letter) => (
                      <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.h1>
                  <motion.p variants={titleVariants} initial="hidden" whileInView="visible">
                    {titles[0][props.langue][props.current_image].text.split("").map((letter) => (
                      <motion.span key={props.current_image} variants={letterVariants}>{letter}</motion.span>
                    ))}
                  </motion.p>
                </AnimatePresence>
              </div>
              <div className="presentation-img">
                <AnimatePresence>
                  <motion.div
                    className="presentation-sous-img"
                    style={{ backgroundImage: `url(${images[props.current_image].image})` }}
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
              <AnimatePresence>
                <motion.div
                  className='presentation-aprops'
                  viewport={{ once: true }}
                  whileInView="visible"
                  initial="hidden"
                  variants={apropsVariants}
                >
                  <h1>
                    <span>{aprops[0][props.langue].title}</span>
                  </h1>
                  <p>
                    <span>{aprops[0][props.langue].text}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          <section className='home-part2'>
              <div className='home-part2-1'>
                <div className='messions-title'>
                  <h1>Messions</h1>
                </div>
                <div
                  className='messions-type'
                  
                 
                >
                  <AnimatePresence key={messions[0][props.langue][0].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][0].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][0].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][1].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][1].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][1].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][2].id}>
                          <motion.div
                          className='mession'
                          key={messions[0][props.langue][0].id}
                          variants={mession_itemVariants}
                          whileHover={{ scale: 1.05 }}
                          viewport={{ once: true }}
                          initial='hidden'
                          whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][2].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][2].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                        <AnimatePresence key={messions[0][props.langue][3].id}>
                          <motion.div
                            className='mession'
                            key={messions[0][props.langue][0].id}
                            variants={mession_itemVariants}
                            whileHover={{ scale: 1.05 }}
                            viewport={{ once: true }}
                            initial='hidden'
                            whileInView='visible'
                          >
                            <div className='mession-title'>
                              <h1>{messions[0][props.langue][3].title}</h1>
                            </div>
                            <div className='mession-text'>
                              <p>{messions[0][props.langue][3].text}</p>
                            </div>
                          </motion.div>
                        </AnimatePresence>

                </div>
              </div>
            </section>


           <section className='home-part3'>
                  <div className='home-part3-1'>
                    <h1>Actualités et événements</h1>
                  </div>

                  <div className='home-part3-2'>
                    <AnimatePresence>
                      <motion.div
                        className='home-part3-2-image'
                        style={{backgroundImage: `url(${events[0][props.langue][currentEvent].image})`}}
                        variants={image_eventVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={events[0][props.langue][currentEvent].image}
                      >
                      </motion.div>
                                        
                      <motion.div
                        className='home-part3-2-text'
                        variants={textVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={events[0][props.langue][currentEvent].title}
                        onAnimationComplete={definition => {
                          console.log('Completed animating', definition)
                        }}
                      >
                        <div className='home-part3-2-text-div'>
                          <h1>
                            {events[0][props.langue][currentEvent].title}
                          </h1>
                          <p>
                            {events[0][props.langue][currentEvent].text}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    <div className='home-part3-help1' style={{backgroundImage: `url(${events[0][props.langue][currentEvent].image})`}}>
                    </div>

                    <div className='home-part3-help2'>
                      <h1>
                        {events[0][props.langue][currentEvent].title}
                      </h1>
                      <p>
                        {events[0][props.langue][currentEvent].text}
                      </p>
                    </div>
                  </div>

                  <div className='home-part3-3'>
                   

                    <div className='home-part3-buttons'>
                      <button className='home-part3-button prev' onClick={()=>change_event('prev')}>&lt;</button>
                      <button className='home-part3-button next' onClick={()=>change_event('next')}>&gt;</button>
                    </div>
                  </div>
                  <div className='home-part3-3-index'>
                      {events[0][props.langue].map((index)=>{
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
                </section>
                  

              <section className='home-part4'>
                <div className='home-part4-title'>
                <h1>Témoignages de bénévoles et de bénéficiaires</h1>
                </div>
               
                <div className='home-figure'>
                <AnimatePresence>
                <motion.figure className="snip1390"
                 variants={image_figuretVariants}
                 initial="initial"
                 animate="animate"
                 exit="exit"
                 key={figures[0][props.langue][currentFigure].id}
                 drag="x"
                 dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        dragControls={dragControls}
        onDragEnd={handleDragEnd}>
                          <img src={figures[0][props.langue][currentFigure].imgSrc} alt={figures[0][props.langue][currentFigure].imgAlt} className="profile" />
                          <figcaption>
                            <h2>{figures[0][props.langue][currentFigure].name}</h2>
                            <h4>{figures[0][props.langue][currentFigure].role}</h4>
                            <blockquote>{figures[0][props.langue][currentFigure].quote}</blockquote>
                          </figcaption>
                 </motion.figure>
                 </AnimatePresence>

           
                 <div className='home-figure-index'>
                      {figures[0][props.langue].map((index)=>{
                        let backgroundColor = 'green';
                        if (index.id ===currentFigure+1) {
                          backgroundColor = '#B64D07';
                        }
                        return(
                          <div className='home-figure-index-div' style={{backgroundColor}}>
                          </div>
                        )
                      })}
                       </div>
                </div>

              </section>
                
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