const express = require('express')
const path = require('path')

const portMain = 9337
const portAnalytics = 9338

const appMain = express()

appMain.use(function(req, res, next) {
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  next()
})

appMain.use('/public', express.static('public'))

appMain.get('/hello', (req, res) => {
  res.send('Hello from main app!')
})

appMain.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

appMain.listen(portMain, () => {
  console.log(`Main app listening on port ${portMain}`)
})

const appAnalytics = express()

appAnalytics.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  next()
})

appAnalytics.use(express.static('analytics'))

appAnalytics.get('/hello', (req, res) => {
  res.send('Hello from analytics app!')
})

appAnalytics.listen(portAnalytics, () => {
  console.log(`Analytics app listening on port ${portAnalytics}`)
})
