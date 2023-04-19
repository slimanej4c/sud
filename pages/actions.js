import React from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'



export const actions = (props) => {

  const actions = [
    {
      location: [48.8566, 2.3522], // Paris, France
      title: 'Projet d\'aide alimentaire dans la ville de Paris',
      description: 'Ce projet a fourni des repas chauds à plus de 1000 personnes chaque jour pendant trois mois.',
    },
    {
      location: [51.5074, -0.1278], // London, UK
      title: 'Projet de construction d\'un puits dans la ville de Londres',
      description: 'Ce projet a permis à plus de 2000 personnes d\'avoir accès à de l\'eau potable propre.',
    },
    {
      location: [40.7128, -74.0060], // New York City, USA
      title: 'Campagne de vaccination dans la ville de New York',
      description: 'Cette campagne a permis de vacciner plus de 5000 enfants contre les maladies évitables.',
    },
  ];
  

  return (
    <Layout>
    <div>actions</div>
   
    </Layout>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(actions)