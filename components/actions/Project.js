import React from 'react'
import { connect } from 'react-redux'
import { project_info ,project_button} from '../../public/static/text/actions/projets'
export const Project = (props) => {
 
    const don_text=[{"FR":{title:"Faire un don","intro":"Faire un don est un acte important et généreux qui peut faire une grande différence dans la vie des personnes dans le besoin. Si vous souhaitez soutenir notre organisation et aider à faire une différence dans la vie des personnes que nous aidons, faire un don est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment faire un don et pourquoi cela est important pour notre organisation.",
"button_title":"Faire un don",
}}]
  return (
  
     <div className='project'>
        {/* première sous-section */}
        <div className='sous-project'>
                   <div className='text'>
                    <h1>Nos Project</h1>
                    <hr className='line'></hr>
                   </div>
              
               

      <div className="project-container">
        {project_info[0][props.langue].map((item=>{

          return(

            <div className="projects" key={item.id}>
                  <div className="project-item" style={{ backgroundImage: `url(${"/static/images/education.jpg"})` }} >
            
                  </div>
                  <h1>{item.title}</h1>
                  <p>{item.project}</p>
                  <div className='button' >
                      
                  </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Project)