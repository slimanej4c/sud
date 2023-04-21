import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
import Devenir_benevole from '../components/agir/Devenir_benevole'
import Don from '../components/agir/Don'

export const agir = (props) => {
  return (
    <Layout>
    <div  className='agir-container'>
             <section className='devenir-benevole'>

                  <Devenir_benevole/>
  
             </section>
             <section className='don-section'>

             <Don/>
  
             </section>
      
      </div>

    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(agir)