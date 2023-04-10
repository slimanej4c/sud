

import React, { Component ,useState,useEffect} from 'react'
import Link from 'next/link'
import Footer from "../components/Footer"
import Image from 'next/image';
const Layout =(props) =>{
const[show_nav,setshow_nav]=useState(false)
const [open, setOpen] = useState(false);
const [nav_closed, setnav_closed] = useState("layout-nav");
const [nav_opened, setnav_opened] = useState("layout-nav");

const clicked =()=>{
  {setOpen(!open)}
  setshow_nav(!show_nav)
  setnav_closed("layout-nav nav_closed")
  setnav_opened("layout-nav nav_opened")
}
const MenuIcon = () => {
 
 

  return (
    <div className={`menu-icon ${open ? "open" : ""}`} onClick={() =>clicked()}>
      <div className="bar"></div>
      <div className="bar line2"></div>
      <div className="bar"></div>
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
            
            <div className='nav-ul'>
              {
                link_array.map((items)=>{
               
                    return(
                      <div className={items.title==="Nous contacter" ? contact_div :other_div }>
                          <li className='nav-item'  onClick={null}>
                          <Link className="nav-link" href={items.to} onClick={()=> clicked()}>{items.title}</Link>
                        
                          </li>
                      </div>
                  )

                 
                  
                })
              }
            
            </div>
      
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

          <div className='nav-logo' >
                          
                                <Image src={"/static/images/Logo.png"} alt="logo_nav" width={60} height={60} />
            </div>
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


