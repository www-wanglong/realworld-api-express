const express = require('express')

const app = express()

const PORT = process.env.PORT || 30000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
