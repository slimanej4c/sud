import Layout from '../hocs/Layout'
import Image from 'next/image';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [ "/static/images/child2.png", "/static/images/child4.png"];

const homePage = () => {

    const [currentImage, setCurrentImage] = useState(0);
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(currentImage => (currentImage + 1) % images.length);
      }, 6000);
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
            duration: 1,
          },
        },
        exit: {
          opacity: 0,
          x: '-100%',
          transition: {
            duration: 0.5,
          },
        },
      };
    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
            <div className='home-presentation'>
            <div className='presentation-title'>
                    <h1>SOLIDARITE SUD</h1>
                    <p >
                    Ensemble, nous avons le<br/>
                          pouvoir de changer des vie
                        </p>
                </div>
                <motion.div
                        className="presentation-img1"
                        style={{
                            backgroundImage: `url(${images[currentImage]})`,
                        }}
                        variants={imageVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={currentImage}
                        ></motion.div>      
                
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
    </Layout>
    )
};

export default homePage;
