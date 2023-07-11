import React from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
export const Benevole_part1 = (props) => {
  const router = useRouter()
    const benevole_text=[{"FR":{title:"Agir avec nous","intro":"En tant qu'organisation à but non lucratif, notre travail repose en grande partie sur le soutien et l'engagement des bénévoles. Sans le dévouement de notre communauté de bénévoles, nous ne pourrions pas réaliser notre mission. Si vous cherchez un moyen de donner de votre temps et de vos compétences pour soutenir une bonne cause, devenir bénévole est un excellent moyen de le faire. Dans cet article, nous allons vous expliquer comment devenir bénévole pour notre organisation",
"intro_title":"Devenez bénévole pour notre organisation à but non lucratif.","intro_title2":"Devenez bénévole","intro2":" si vous cherchez à donner de votre temps et de vos compétences pour soutenir une bonne cause, devenir bénévole pour notre organisation est un excellent moyen de le faire. Contactez-nous pour exprimer votre intérêt et nous serons ravis de discuter avec vous de la façon dont vous pouvez vous impliquer. Nous avons hâte de travailler avec vous pour réaliser notre mission commune.",
}}]
  return (
    <div className='d-part1'>
      <div  className='d-part1-0'>
             <div  className='d-part1-title'>
                 <h1 className='h'> {benevole_text[0]["FR"].title}</h1>
             </div>
      </div>
      <div className='d-part1-1'>
          <div className='d-part1-1-1'>
                
            
          </div>
            <div className='d-part1-1-2'>
         
            <h1> {benevole_text[0]["FR"].intro_title}</h1>
                <p>{benevole_text[0]["FR"].intro}</p>
              
              
            </div>
            
       </div>
       <div className='d-part1-2'>
       <div className='d-part1-2-1'>
         
            <h1> {benevole_text[0]["FR"].intro_title2}</h1>
                <p>{benevole_text[0]["FR"].intro2}</p>
                <button> Devenez bénévole
                </button>
            </div>


       </div>
        
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Benevole_part1)