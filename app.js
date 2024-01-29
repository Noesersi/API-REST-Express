require('dotenv').config()
const express = require('express')
const admin = require('firebase-admin')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 1234

admin.initializeApp({
  credential: admin.credential.cert({
    type: 'service_account',
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
  })
})

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] Request: ${req.method} ${req.url}`)
  next()
})

app.use((err, req, res, next) => {
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
  console.log(`http://localhost:${port}`)
})
