const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.get('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id

    const bookData = await hogwartsLibrary.doc(bookId).get()

    if (!bookData.exists) {
      return res.status(404).json({ error: 'Book not found, shame...' })
    }

    const bookDetails = {
      id: bookData.id,
      ...bookData.data()
    }

    res.json(bookDetails)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
