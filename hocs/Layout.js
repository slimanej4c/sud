

import React, { Component ,useState,useEffect} from 'react'
import Link from 'next/link'
import Footer from "../components/Footer"
import Image from 'next/image';
import { motion } from "framer-motion";
import Cookies from "js-cookie";
const Layout =(props) =>{
const[show_nav,setshow_nav]=useState(false)
const [open, setOpen] = useState(false);
const [nav_closed, setnav_closed] = useState("layout-nav");
const [nav_opened, setnav_opened] = useState("layout-nav");


const [selectedLanguage, setSelectedLanguage] = useState("FR");

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    Cookies.set('language', selectedLanguage, { expires: 365 });
  };

  useEffect(() => {
    const languageCookie = Cookies.get("language");
    if (languageCookie) {
      setSelectedLanguage(languageCookie);
    }
  }, []);

const navbarVariants = {
  hidden: { y: "-100%" },
  visible: {
    y: 0,
    transition: {
     
      duration: 0.75,
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: "-200%", opacity: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
     
      duration: 0.75,
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
const logoVariants = {
  rotate: {
    transform: "rotate(360deg)",
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 15,
      ease: "linear",
    
    },
  },
};
const clicked =()=>{
  {setOpen(!open)}
  setshow_nav(!show_nav)
  setnav_closed("layout-nav nav_closed")
  setnav_opened("layout-nav nav_opened")
}
const MenuIcon = () => {
 
 

  return (
    <div className={`menu-icon ${open ? "open" : ""}`} onClick={() =>clicked()}>
      <div className="bar line1"></div>
      <div className="bar line2"></div>
      <div className="bar line3"></div>
    </div>
  );
};
//essayer avec position fixed ou absolute pour fixer les element de nav bar
                  
const link_array=[{id:1,title:'Accueil',to:"/"},{id:2,title:'Agir avec nous',to:"/agir"},{id:3,title:'Nos actions',to:"/actions"},{id:4,title:'Nous contacter',to:"/contact"}]
const Nav=()=>{
  const contact_div="item-div contact"
  const other_div="item-div"
  return(
    <nav className={show_nav ? nav_opened :nav_closed}>

<div className="radio-input">
      <label className="label">
        <input
          type="radio"
          name="radio"
          value="FR"
          checked={selectedLanguage === "FR"}
          onChange={handleLanguageChange}
        />
        <span className="check">FR</span>
      </label>
      <label className="label">
        <input
          type="radio"
          name="radio"
          value="ENG"
          checked={selectedLanguage === "ENG"}
          onChange={handleLanguageChange}
        />
        <span className="check">ENG</span>
      </label>
      <label className="label">
        <input
          type="radio"
          name="radio"
          value="DE"
          checked={selectedLanguage === "DE"}
          onChange={handleLanguageChange}
        />
        <span className="check">DE</span>
      </label>
    </div>
            <motion.ul
                className="nav-ul"
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
              >
                {link_array.map((item) => (
                  <motion.li
                    key={item.title}
                    variants={itemVariants}
                    className={item.title === "Nous contacter" ? contact_div : other_div}
                  >
                    <Link className="nav-link" href={item.to} onClick={() => clicked()}>
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
    </motion.ul>
      
      </nav>
  )
}


    return (
  

      
      <div className="layout-all">
        {/** <div className='layout-lines' onClick={()=>setshow_nav(!show_nav)} >
          <div className='layout-line line1'></div>
          <div className='layout-line line2'></div>
          <div className='layout-line line3'></div>
      </div>*/}
     
      
           
     {Nav()}

  

     <motion.div className="nav-logo" animate="rotate" variants={logoVariants}>
        <Image src={"/static/images/Logo.png"} alt="logo_nav" width={60} height={60} />
      </motion.div>
            <div className="layout-nav-mobile">
                
                      {MenuIcon()}
                    
                
          </div>
  
     <div className='layout-header'>
        <div className="layout-container">{props.children}
        
        </div>
     <Footer/>
      
      </div>
     
    </div>
    
     

   
    )
  
}








export default Layout


