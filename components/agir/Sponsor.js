import React from 'react'
import { connect } from 'react-redux'
import { sponsor_text ,sponsor_image} from '../../public/static/text/agir/sponsor'
export const Sponsor = (props) => {

  return (
  
     <div className='sponsor'>
        {/* première sous-section */}
        <div className='sous-sponsor'>
                   <div className='text'>
                    <h1>{sponsor_text[0][props.langue].title}</h1>
                    <hr className='line'></hr>
                   </div>
              
               

      <div className="sponsor-container">
        {sponsor_image.map((item=>{

          return(
            <div className="sponsor-item" key={item.image} style={{ backgroundImage:  `url(${item.image})`  }} >
   
    </div>
          )
        }))}
 
  </div>
                
      
  </div>
       
      </div>
  )
}
const mapStateToProps = (state) => ({
  langue:state.change_langue_reducer.langue,
  cookies_accepted:state.change_langue_reducer.cookies_accepted,
  current_image:state.change_langue_reducer.current_image,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Sponsor)