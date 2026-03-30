import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

// Mock user database
const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'john123',
    plan: 'Premium'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'jane123',
    plan: 'Standard'
  },
  {
    id: 3,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    plan: 'Premium'
  }
]

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: 'Email and password are required.'
    })
  }

  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  )

  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Invalid email or password. Please try again.'
    })
  }

  // Send back user data without the password
  const { password: pw, ...userData } = user

  return res.status(200).json({
    success: true,
    message: 'Login successful.',
    user: userData
  })
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT)
})
