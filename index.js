const express = require('express')
const app = express()
const port = 3000
const print = console.log
app.use(express.json());
let messages = {}
let messagesnumber = 0

app.post('/sms', (req, res) => {
    ///print(req.body)
    const body = req.body
    messagesnumber = messagesnumber+1
    messages[messagesnumber] = body.Info
    res.send("ok")
    print(messages)
})

app.get('/message', (req, res) => {
    res.send(messages)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})