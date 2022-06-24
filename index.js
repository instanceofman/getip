const axios = require('axios')
const express = require('express')

const app = () => {
  const app = express()
  const port = 3000

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/ip', async (req, res) => {
    const {data} = await axios.get('https://api.ipify.org?format=json')

    res.send(data)
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

app()
