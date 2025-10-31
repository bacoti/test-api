const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/json', (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    return res.status(400).json({"errorMessage": "Invalid JSON"})
  }
  return res.status(200).json({
    success: true,
    data: req.body
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
