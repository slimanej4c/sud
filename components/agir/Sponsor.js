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
                    <h1>Sposors</h1>

                   </div>
                   <div className='list'>
                      <div className='item'>

                      </div> <div class="sponsor-container">
    <div class="sponsor-item">
      <img src={ `url(${"/static/images/collecter.jpg"})` } alt="Sponsor 1"/>
    </div>
    <div class="sponsor-item">
      <img src="https://exemple.com/sponsor2.jpg" alt="Sponsor 2"/>
    </div>
    <div class="sponsor-item">
      <img src="https://exemple.com/sponsor3.jpg" alt="Sponsor 3"/>
    </div>
    <div class="sponsor-item">
      <img src="https://exemple.com/sponsor4.jpg" alt="Sponsor 4"/>
    </div>
  </div>
                   </div>
        </div>
      
       
      </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)