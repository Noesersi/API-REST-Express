const express = require('express')
const admin = require('firebase-admin')
const router = express.Router()

const db = admin.firestore()
const hogwartsLibrary = db.collection('books')

router.delete('/books/:id', async (req, res) => {
  try {
    const bookId = req.params.id
    await hogwartsLibrary.doc(bookId).delete()
    res.json({ id: bookId, message: 'Book deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
