const express = require('express')
const admin = require('firebase-admin')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 1234

const serviceAccount = require('./firebase-config.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.use(cors())
app.use(express.json())

const getAllBooksRoute = require('./routes/getAllBooks')
const addBookRoute = require('./routes/addBook')
const editBookRoute = require('./routes/editBook')
const deleteBookRoute = require('./routes/deleteBook')

app.use('/api', getAllBooksRoute)
app.use('/api', addBookRoute)
app.use('/api', editBookRoute)
app.use('/api', deleteBookRoute)

const dataRoutes = require('./routes.js')
app.use('/api', dataRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
