const express = require('express');
require('dotenv').config();
const Note = require('../model/Note');
const verifyToken = require('../middleware/auth');
require('dotenv').config();
const router = new express.Router();
router.get('/getNote', verifyToken, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user._id })
    res.send(notes)
  } catch (e) {
    res.status(400).send("Something went wrong")
  }
})
router.post('/createNote', verifyToken, async (req, res) => {
  const note = new Note({ user: req.user._id, ...req.body });
  try {
    await note.save();
    res.status(201).send('true');
  } catch (e) {
    res.status(400).send('false');
  }
})
router.delete('/deleteNote/:id', verifyToken, async (req, res) => {
  const note = await Note.findOneAndDelete({ _id: req.params.id })
  try {
    if (!note) {
      return res.status(400).send()
    }
    res.send(note)
  } catch (e) {
    res.status(404).send(e)
  }
})
router.patch("/editNote/:id", verifyToken, async (req, res) => {
  const updates = Object.keys(req.body)
  const allowedupdates = ['title', 'description']
  const isvalidoperation = updates.every((update) => { return allowedupdates.includes(update) })
  if (!isvalidoperation) {
    return res.status(404).send()
  }
  try {
    const _id = req.params.id
    const note = await Note.findById(_id)
    updates.forEach((update) => {
      note[update] = req.body[update]
    })
    await note.save()
    if (!note) {
      return res.status(404).send()
    }
    res.send(note)
  } catch (e) {
    res.status(400).send(e)
  }
})
module.exports = router;