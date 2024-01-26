const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.post('/addAllBooks', async (req, res) => {
  try {
    const booksData = req.body

    const results = await Promise.all(booksData.map(async (book) => {
      const result = await hogwartsLibrary.add(book)
      return { id: result.id, title: book.title }
    }))

    res.status(201).json({ books: results, message: 'Books added successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
