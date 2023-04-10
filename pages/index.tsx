import Layout from '../hocs/Layout'
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react";

const images = [ "/static/images/child2.png", "/static/images/child4.png"];

export default function Home()  {

    const [currentImage, setCurrentImage] = useState(0);
    
    const messions=[{id:1,title:'Aide alimentaire',text:"Nous fournissons des repas nutritifs aux enfants en situation demalnutrition dans les communautéslocales, afin de leur assurer une alimentation adéquatepour leur développement"},
    {id:2,title:"Accès à l'eau potable",text:"Nous travaillons pour améliorer l'accès à l'eau potable dans les régions où l'eau est rare ou contaminée, en installant des puits, des systèmes de filtration ou en formant des personnes pour gérer les ressources en eau"},
    {id:3,title:'Santé',text:"Nous travaillons pour améliorer l'accès aux soins de santé, en offrant des soins médicaux gratuits ou à faible coût, en organisant des campagnes de sensibilisation à la santé et en formant des professionnels de la santé locaux"}
]
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
      }, 8000);
      return () => clearInterval(interval);
    }, []);
  
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
    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
          <div className='home-part1'>
                <div className='home-presentation'>
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
                        className="presentation-img1"
                        style={{backgroundImage: `url(${images[currentImage]})`}}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={currentImage}
                      /> 
                      </AnimatePresence>
                </div>
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
               <div className='home-part2'>

                          
                    <div className='home-messions'>
                      <div className='messions-title'>
                              <h1>Messions</h1>
                      </div>
                      
                      <div className='messions-type'>
                        {
                          messions.map((items=>{
                            return(
                              <div className='mession'>
                                <h1>{items.title}</h1>
                                <p>{items.text}</p>
                              </div>
                            )
                          }))
                        }

                      </div>

                    </div>
              </div>
                
            </div>
        </div>
    </Layout>
    )
};


