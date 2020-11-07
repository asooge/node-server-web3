const express = require('express')
const app = express()

const Web3 = require('web3')
const web3 = new Web3(`ws://localhost:8545`)

const port = process.env.PORT || 4000

web3.eth.subscribe('newBlockHeaders', (error, result) => {
  console.log(result.hash)
})

app.get('/', async (req, res) => {
  const accounts = await web3.eth.getAccounts()
  res.send(accounts)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/`)
})
