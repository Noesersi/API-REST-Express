const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.get('/books', async (req, res) => {
  try {
    const getBooksData = await hogwartsLibrary.get()
    const books = getBooksData.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    res.json(books)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
