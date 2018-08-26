import 'babel-polyfill'
import express from 'express'
import renderer from '../src/helpers/renderer'
import { matchRoutes } from 'react-router-config'
import Routes from '../client/Routes'
const app = express()
import createStore from './helpers/createStore'

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()
  const promiseArray = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null
  })
  Promise.all(promiseArray).then(() => {
    res.send(renderer(req, store))
  })
})

app.listen(3000, () => console.log('Listening on port 3000...'))
