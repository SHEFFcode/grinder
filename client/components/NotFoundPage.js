import React from 'react'

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.error = true
  return <h1>Route note found!</h1>
}

export default {
  component: NotFoundPage
}
