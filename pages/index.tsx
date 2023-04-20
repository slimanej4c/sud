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
import Accueil_part1 from "../components/accueil/Accueil_part1"
import Accueil_part2 from "../components/accueil/Accueil_part2"
import Accueil_part3 from "../components/accueil/Accueil_part3"
import Accueil_part4 from "../components/accueil/Accueil_part4"




function Home(props)  {




 

  
      useEffect(() => {
      
   console.log('langue changed to', props.langue ,props.cookies_accepted)
  

  }, [props.langue]);

   
  

    
  


   
    return(
    <Layout
        title='httpOnly Auth | Home'
        content='Home page for this auth tutorial on httpOnly cookies with json web tokens'
    >
        <div className='home-all'>
          <div className='home-all-part'>
         <Accueil_part1/>
         <Accueil_part2/>
         <Accueil_part3/>
         <Accueil_part4/>
          


          
                  

            
                
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