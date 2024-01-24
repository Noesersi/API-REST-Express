const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.post('/books', async (req, res) => {
  try {
    const newBook = req.body
    const result = await hogwartsLibrary.add(newBook)
    res.status(201).json({ id: result.id, message: 'Book added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
