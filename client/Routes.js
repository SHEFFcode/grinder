import App from './App'
import HomePage from './components/HomePage'
import UsersListPage from './components/UsersListPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path: '/users'
      }
    ]
  }
]
