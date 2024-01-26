const express = require('express')
const admin = require('firebase-admin')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 1234

const serviceAccount = require('./firebase-config.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`)
  next()
})

app.use((err, req, res) => {
  console.error(`[${new Date().toISOString()}] Error: ${err.stack}`)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.use(cors())
app.use(express.json())

const getAllBooksRoute = require('./routes/getAllBooks')
const getBookIdRoute = require('./routes/getBookId')
const addBookRoute = require('./routes/addBook')
const editBookRoute = require('./routes/editBook')
const deleteBookRoute = require('./routes/deleteBook')
const addAllBooksRoute = require('./routes/addAllBooks')

app.use('/api', getAllBooksRoute)
app.use('/api', getBookIdRoute)
app.use('/api', addBookRoute)
app.use('/api', editBookRoute)
app.use('/api', deleteBookRoute)
app.use('/api', addAllBooksRoute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
