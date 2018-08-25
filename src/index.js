import 'babel-polyfill'
import express from 'express'
import renderer from '../src/helpers/renderer'
const app = express()
import createStore from './helpers/createStore'

app.use(express.static('public'))
app.get('*', (req, res) => {
  const store = createStore()
  //init and load data into the store
  res.send(renderer(req, store))
})

app.listen(3000, () => console.log('Listening on port 3000...'))
