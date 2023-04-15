

import { connect } from 'react-redux'
import Link from 'next/link'
import Image from 'next/image';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

import {
  faFacebook ,faTwitter,faLinkedin
  
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
const aprops_footer={"FR":"Soladirité est une association à but non lucratif qui travaille pour améliorer la vie des enfants en difficulté en leur fournissant de l'aide alimentaire, l'accès à l'eau potable, l'éducation et la santé,en collaboration avec des partenaires locaux.",
"ENG": "Soladirité is a non-profit organization that works to improve the lives of children in need by providing them with food aid, access to clean water, education, and health care in collaboration with local partners.",
"DE": "Soladirité ist eine gemeinnützige Organisation, die sich dafür einsetzt, das Leben von benachteiligten Kindern durch verschiedene Programme wie Lebensmittelhilfe, Zugang zu sauberem Wasser, Bildung und Gesundheit zu verbessern und mit lokalen Partnern zusammenzuarbeiten."}

const info = {
  "Coor": {
      "FR": "Coordonnées bancaires",
      "ENG": "Bank details",
      "DE": "Bankverbindung"
  },
  "Contact": {
      "FR": "Contact",
      "ENG": "Contact",
      "DE": "Kontakt"
  },
  "Menu": {
    "FR": "Menu",
    "ENG": "Menu",
    "DE": "Menü"
},
"apropos": {
  "FR": "À propos",
  "ENG": "About",
  "DE": "Über uns"
}
}

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
  return (
    
    <footer class="footer">
    <div class="footer-top">
      <div className='footer-top-1'>
        <div className='footer-description'>
          
            <div className='footer-aprops'>
                <h1>{info["apropos"][props.langue]}</h1>
                <p>{aprops_footer[props.langue]}</p>
            </div>
          
        </div>
        <div class="footer-coordone">
              <h1>{info["Contact"][props.langue]}</h1>
                <ul>
                  <li>Adresse : Worben 5, CH-5706 Boniswil (SUISSE)</li>
                  <li>Tél: +41 62 535 62 31</li>
                  <li>Mobile: +41 79 550 17 45</li>
                  <li>E-mail: solidaritesud1@gmail.com</li>
                </ul>
                <div className='footer-icons'>
                <FontAwesomeIcon icon={faFacebook} style={{  color: "black" }} className="footer-icon"/>
                <FontAwesomeIcon icon={faTwitter} style={{ color: "black" }} className="footer-icon"/>
                <FontAwesomeIcon icon={faLinkedin} style={{  color: "black" }} className="footer-icon"/>
              </div>
              </div>
        </div>

      
        <div className='footer-top-2'>
        
              
              <div class="footer-coordone-bank">
              <h1>{info["Coor"][props.langue]}</h1>
                <ul>
                  <li></li>
                  <li>RAIFFEISEN BANK</li>
                  <li>Aarau-Raiffeisen</li>
                  <li>SOLIDARITé-SUD</li>
                  <li>IBAN CH33 8080 8006 4374 7900 6</li>
                  <li>Kasinostrasse 37 – 5000 Aarau</li>
                </ul>
              </div>
              <nav class="footer-menu">
                <h1>{info["Menu"][props.langue]}</h1>
                <ul>
                  {link_array[0][props.langue].map((item) => (
                    <li>
                      <Link className="footer-nav-link" href={item.to} onClick={() => clicked()}>
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
        </div>
      </div>
      <div class="footer-bottom">
      <div className='footer-logo-title'>
                  <div class="footer-logo">
              
                  
                  </div>
                  <div class="footer-title">
                            <h2>SOLIDARITé</h2>
                    </div> 
            </div>
       
        <h3>Personne de référence : M. Maurice Zellweger, Président</h3>
      </div>
   
  </footer>
  
  );
  }
  



const mapStateToProps = (state) => ({
 
  langue:state.change_langue_reducer.langue,


})

const mapDispatchToProps = dispatch =>{
return{
  Set_langue_redux:(lang)=>dispatch(Set_langue_redux(lang)),
  Set_cookies_redux:(val)=>dispatch(Set_cookies_redux(val)),
}

}

export default connect(mapStateToProps, mapDispatchToProps)( Footer)
