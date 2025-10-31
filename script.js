const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/parameters/:mhslpkia', (req, res) => {

    let dataMhs=req.params.mhslpkia;
    let listBlacklistMhs=["didin","panjul","pawaz"];

    try {
        if (listBlacklistMhs.find(x=>x===dataMhs).length>0 ){
        return res.status(200).json({
            "pesan":"anda masuk dalam blacklist",
            "data_mhs_blacklist":listBlacklistMhs
        })
    }
    } catch (error) {
        
    }
    return res.status(200).json({
            "pesan":"anda tidak termasuk dalam blacklist",
            "data_mhs_blacklist":listBlacklistMhs
    })

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
