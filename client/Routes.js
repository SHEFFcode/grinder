import App from './App'
import HomePage from './components/HomePage'
import UsersListPage from './components/UsersListPage'
import NotFoundPage from './components/NotFoundPage'

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
      },
      {
        //by not providing the path, this will be shown when no route matches.
        ...NotFoundPage
      }
    ]
  }
]
