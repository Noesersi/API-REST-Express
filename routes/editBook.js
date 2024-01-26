const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.put('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id
    const updatedBook = req.body
    await hogwartsLibrary.doc(bookId).set(updatedBook, { merge: true })
    console.log(bookId)
    res.json({ id: bookId, message: 'Book updated successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
