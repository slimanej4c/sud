

import React, { Component ,useState,useEffect} from 'react'
import Link from 'next/link'
import Footer from "../components/Footer"
import Image from 'next/image';
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useRouter } from 'next/router';
import {faPhone ,faWater ,faWaterLadder,faLadderWater ,faBottleWater 
} from "@fortawesome/free-solid-svg-icons";
import {
   faSquareWhatsapp
  
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Set_langue_redux } from '../Redux'
import {Set_cookies_redux } from '../Redux'
import { connect } from 'react-redux'

import  { store ,store2 }  from '../Redux/store';

import { PersistGate } from 'redux-persist/integration/react';
import {  persistStore } from 'redux-persist';

const Layout =(props) =>{

const[show_nav,setshow_nav]=useState(false)
const [open, setOpen] = useState(false);
const [nav_closed, setnav_closed] = useState("layout-nav");
const [nav_opened, setnav_opened] = useState("layout-nav");

const [per, setper] = useState(false);
const [show_model, setshow_model] = useState(true);
const [clickedd, setClickedd] = useState(false);

  function handleClick() {
    setClickedd(!clickedd);
  }
/* sync function readTextFile(filePath) {
  try {
    const fileContent = await fs.promises.readFile(filePath, 'utf-8');
    console.log("fillleeee",fileContent);
    console.log("fillleeee",fileContent);
    console.log("fillleeee",fileContent);
    if (fileContent==="yes"){
      //setper(store)
    }
  } catch (error) {
    console.error(error,"error.rrrrrrrrrrrrrrrrrrrrrr");
    console.error(error,"error.rrrrrrrrrrrrrrrrrrrrrr");
    console.error(error,"error.rrrrrrrrrrrrrrrrrrrrrr");
    console.error(error,"error.rrrrrrrrrrrrrrrrrrrrrr");
    console.error(error,"error.rrrrrrrrrrrrrrrrrrrrrr");
  }
}
readTextFile('./hocs/log.txt') */
const cookieValue = Cookies.get('cok');
console.log('hiiiiiiii layout',cookieValue)
console.log('hiiiiiiii layout',cookieValue)
console.log('hiiiiiiii layout',cookieValue)
console.log('hiiiiiiii layout',cookieValue)

const accept_cookies=(val)=>{
  if(val){
    Cookies.set('cok','true');
    const unsubscribe = persistStore(store)
    props.Set_cookies_redux(true)

  }
  else{
    props.Set_cookies_redux(false)
  }



    fetch('http://localhost:3000/api/file', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: 'true' }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Affiche la réponse du serveur (message de succès ou d'erreur)
      })
      .catch((error) => {
        console.error('Error updating file:', error);
      });


} 
const router = useRouter();




  const handleLanguageChange = (event) => {
   
    props.Set_langue_redux(event.target.value)
   
    
  };
/* try{
  const cookieValue = Cookies.get('cok');
  if (cookieValue){
    {!per && setper(true)}
  }
  else{
   { per && setper(false)}
  }
  console.log("js coookies" ,cookieValue)
  console.log("js coookies" ,cookieValue)
  console.log("js coookies" ,cookieValue)
  console.log("js coookies" ,cookieValue)
  console.log("js coookies" ,cookieValue)
}
catch{

} */
  useEffect(() => {
    console.log("cokkies layout....................",props.langue,per, Cookies.get('cok'))
  
   
    
   // props.Set_cookies_redux(true)
 

   // props.cookies_accepted ? setper(persistStore (store)) :  setper(persistStore (store2))
  
  }, []);

  useEffect(() => {
   
  
  
  }, [props.langue]);
  
  useEffect(() => {
   
  
  
  }, [per]);
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
const openwhatsapp=()=>{

  const phoneNumber = '+41 79 550 17 45'; // Numéro de téléphone à contacter

  // Créer le lien URI WhatsApp avec le numéro de téléphone
  const uri = `whatsapp://send?phone=${phoneNumber}`;

  // Ouvrir le lien dans une nouvelle fenêtre ou un nouvel onglet
  window.location.href = uri;
}
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
const radio_input=()=>{
  return(
    <div className="radio-input">
      <label className="label" >
        <input
          type="radio"
          name="radio1"
          value="FR"
          checked={props.langue === "FR"}
          onChange={handleLanguageChange}
        />
        <span className="check">FR</span>
      </label>
      <label className="label">
        <input
          type="radio"
          name="radio2"
          value="ENG"
          checked={props.langue === "ENG"}
          onChange={handleLanguageChange}
        />
        <span className="check">ENG</span>
      </label>
      <label className="label">
        <input
          type="radio"
          name="radio3"
          value="DE"
          checked={props.langue === "DE"}
          onChange={handleLanguageChange}
        />
        <span className="check">DE</span>
      </label>
    </div>

  )
}
//essayer avec position fixed ou absolute pour fixer les element de nav bar
                  

const link_array = [
  {
    FR: [
      { id: 1, title: 'Accueil', to: '/' },
      { id: 2, title: 'Agir avec nous', to: '/agir' },
      { id: 3, title: 'Nos actions', to: '/actions' },
      { id: 4, title: 'Nous contacter', to: '/contact' }
    ],
    ENG: [
      { id: 1, title: 'Home', to: '/' },
      { id: 2, title: 'Act with us', to: '/agir'  },
      { id: 3, title: 'Our actions', to: '/actions' },
      { id: 4, title: 'Contact us', to: '/contact' }
    ],
    DE: [
      { id: 1, title: 'Startseite', to: '/' },
      { id: 2, title: 'Mit uns handeln', to: '/agir'  },
      { id: 3, title: 'Unsere Aktionen', to: '/actions'  },
      { id: 4, title: 'Kontaktiere uns', to: '/contact' }
    ]
  }
];
const Nav=()=>{
  const contact_div="item-div contact"
  const other_div="item-div"
  return(
    <nav className={show_nav ? nav_opened :nav_closed}>
    
  
            <motion.ul
                className="nav-ul"
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
              >
                    {radio_input()}
                    {link_array[0][props.langue].map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className={item.to === "/contact" ? contact_div : other_div}
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
  <>
    
     
     {/*  <PersistGate loading={null} persistor={per ? persistStore(store) :  persistStore(store2)}> */}
   
      
      <div className="layout-all">
       
     {Nav()}
     
     <motion.div className="nav-logo" animate="rotate" variants={logoVariants}>
        <Image src={"/static/images/logo_m.png"} alt="logo_m" width={50} height={50} />
      </motion.div>
            <div className="layout-nav-mobile">
           
                      {MenuIcon()}
                
          </div>
  
     <div className='layout-header'>
        <div className="layout-container">
          {props.children}
         <div className={'layout-model'} style={{visibility: props.cookies_accepted ?  "hidden"  : "visible" }}>
                  <button className='' onClick={()=>accept_cookies(true)}>cokies</button>
                  <button className='' onClick={()=>accept_cookies(false)}>no cokies</button>
          </div> 
       
        
        </div>
        <div className="whatsapp-iconn">
        <FontAwesomeIcon icon={faSquareWhatsapp} style={{fontSize:50 , color:"green"}}  onClick={()=>openwhatsapp()}/>
    
        </div>
     <Footer/>
      
      </div>
     
    </div>
   {/*  </PersistGate> */}
      
   
  

      </>
    )
  
}




const mapStateToProps = (state) => ({
 
  langue:state.change_langue_reducer.langue,
  cookies_accepted:state.change_langue_reducer.cookies_accepted,

})

const mapDispatchToProps = dispatch =>{
return{
  Set_langue_redux:(lang)=>dispatch(Set_langue_redux(lang)),
  Set_cookies_redux:(val)=>dispatch(Set_cookies_redux(val)),
}

}

export default connect(mapStateToProps, mapDispatchToProps)( Layout)





