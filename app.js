const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 30000

app.use('/api', router)

// 统一处理异常
app.use(errorHandler())

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`)
})
