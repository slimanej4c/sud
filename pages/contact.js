import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
export const contact = (props) => {
  return (
    <Layout

>
    <div>contact</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(contact)