import React from 'react'
import PropTypes from 'prop-types'
import ContentRowTop from '../components/Dashboard/ContentRowTop'

const metrics = [
  {
    show: true,
    title: "Movies in Data Base",
    color: "primary",
    digit: 21,
    icon: "film",
  },
  {
    show: true,
    title: "Total awards",
    color: "success",
    digit: 79,
    icon: "award",
  },
  {
    show: true,
    title: "Actors quantity",
    color: "warning",
    digit: 49,
    icon: "user",
  },
];

const Dashboard = props => {
  return (
    <ContentRowTop data={metrics} />
  )
}

Dashboard.propTypes = {}

export default Dashboard

