import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const linksArr = await db.getLinks()
    res.json(linksArr)
  } catch (error) {
    console.error('oh no route "/" error', error)
    res.sendStatus(500)
  }
})
