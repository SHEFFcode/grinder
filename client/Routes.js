import React from 'react'
import HomePage from './components/HomePage'
import UsersListPage from './components/UsersListPage'

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...UsersListPage,
    path: '/users',
  }
]
