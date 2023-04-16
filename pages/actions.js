import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
export const actions = (props) => {
  return (
    <Layout>
    <div>actions</div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(actions)