import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'

import Don from '../components/agir/Don'
import Devenir from '../components/agir/Devenir'
import Parrainer_enfant from '../components/agir/Parrainer_enfant'
import Collecte_fonds from '../components/agir/Collecte_fonds'
import Sponsor from '../components/agir/Sponsor'
import Agir_nous from '../components/agir/Agir_nous'

export const agir = (props) => {
  return (
    <Layout>
    <div  className='agir-container'>
            <section className='agir-nous-section'>
            <Agir_nous/>
            </section>
             <section className='agir-section'>

                  <Devenir/>
  
             </section>
              <section className='agir-section'>
              <Don />

              </section>
              <section className='agir-section'>
              <Parrainer_enfant/>

              </section>
              <section className='agir-section'>
              <Collecte_fonds/>

              </section>
              <section className='agir-section'>
              <Sponsor/>

              </section>
      
      
      </div>

    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(agir)