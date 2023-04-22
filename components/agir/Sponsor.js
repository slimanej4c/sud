import React from 'react'
import { connect } from 'react-redux'

export const Sponsor = (props) => {
  
    const don_text=[{"FR":{title:"Faire un don","intro":"Faire un don est un acte important et généreux qui peut faire une grande différence dans la vie des personnes dans le besoin. Si vous souhaitez soutenir notre organisation et aider à faire une différence dans la vie des personnes que nous aidons, faire un don est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment faire un don et pourquoi cela est important pour notre organisation.",
"button_title":"Faire un don",
}}]
  return (
  
     <div className='sponsor'>
        {/* première sous-section */}
        <div className='sous-sponsor'>
                   <div className='text'>
                    <h1>Nos Sposors</h1>
                    <hr className='line'></hr>
                   </div>
              
               

      <div className="sponsor-container">
    <div className="sponsor-item" style={{ backgroundImage: `url(${"/static/images/sponsor.jpg"})` }} >
   
    </div>
    <div className="sponsor-item" style={{ backgroundImage: `url(${"/static/images/sponsor.jpg"})` }}>
   
    </div>
    <div className="sponsor-item" style={{ backgroundImage: `url(${"/static/images/sponsor.jpg"})` }}>
   
    </div>
    <div className="sponsor-item" style={{ backgroundImage: `url(${"/static/images/sponsor.jpg"})` }}>
   
   </div>
   <div className="sponsor-item" style={{ backgroundImage: `url(${"/static/images/sponsor.jpg"})` }}>
   
   </div>
  </div>
                
      
  </div>
       
      </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)