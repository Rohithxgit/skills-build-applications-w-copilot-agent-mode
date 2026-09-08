import express from 'express'

import './config/database.js'
import { Activity } from './models/activity.js'
import { User } from './models/user.js'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const codespaceName = process.env.CODESPACE_NAME
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.get('/api/users', async (_request, response) => {
  try {
    response.json(await User.find().lean())
  } catch (error) {
    response.status(500).json({ error: 'Unable to load users' })
  }
})

app.get('/api/activities', async (_request, response) => {
  try {
    response.json(await Activity.find().lean())
  } catch (error) {
    response.status(500).json({ error: 'Unable to load activities' })
  }
})

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`)
  console.log(`API base URL: ${apiBaseUrl}`)
})