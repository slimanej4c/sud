import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
export const agir = (props) => {
  return (
    <Layout>
    <div>agir</div>

    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(agir)