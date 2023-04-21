import React from 'react'
import { connect } from 'react-redux'

export const Don = (props) => {

  
    const don_text=[{"FR":{title:"Faire un don","intro":"Faire un don est un acte important et généreux qui peut faire une grande différence dans la vie des personnes dans le besoin. Si vous souhaitez soutenir notre organisation et aider à faire une différence dans la vie des personnes que nous aidons, faire un don est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment faire un don et pourquoi cela est important pour notre organisation.",
"button_title":"Faire un don",
}}]
  return (
    <div className='don-all'>
      <div  className='don'>
               <div className='don-image'>
                
            
                </div>
             <div  className='don-text'>
                 <h1 className='h'> {don_text[0]["FR"].title}</h1>
                 <p>{don_text[0]["FR"].intro}</p>
                 <button> Faire un don
                </button>

             </div>
             
      </div>
     

        
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Don)