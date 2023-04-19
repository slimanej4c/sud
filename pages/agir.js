import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'

import Benevole_part1 from '../components/Benevole_part1'
export const agir = (props) => {
  return (
    <Layout>
    <div  className='agir-container'>
             <section className='devenir-benevole'>

                  <Benevole_part1 />
  
             </section>
      
      </div>

    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(agir)