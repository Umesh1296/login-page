import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function validate() {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password.trim()) {
      newErrors.password = 'Please enter your password.'
    } else if (password.length < 4) {
      newErrors.password = 'Password must be at least 4 characters.'
    }

    return newErrors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setServerError('')

    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setLoading(true)

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: email,
        password: password
      })

      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/dashboard')
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setServerError(error.response.data.message)
      } else {
        setServerError('Unable to connect to the server. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-bg">
        <img src="/bg.png" alt="" className="login-bg-img" />
        <div className="login-bg-overlay"></div>
      </div>

      <header className="login-header">
        <div className="header-logo">MYSTREAM</div>
      </header>

      <main className="login-main">
        <div className="login-card">
          <h1 className="login-title">Sign In</h1>

          {serverError && (
            <div className="error-banner" id="server-error">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
              </svg>
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className={`float-group ${email ? 'has-value' : ''} ${errors.email ? 'has-error' : ''}`}>
              <input
                id="email-input"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) {
                    setErrors((prev) => ({ ...prev, email: '' }))
                  }
                }}
              />
              <label htmlFor="email-input">Email Address</label>
              {errors.email && <p className="field-error">{errors.email}</p>}
            </div>

            <div className={`float-group ${password ? 'has-value' : ''} ${errors.password ? 'has-error' : ''}`}>
              <div className="password-wrapper">
                <input
                  id="password-input"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) {
                      setErrors((prev) => ({ ...prev, password: '' }))
                    }
                  }}
                />
                <label htmlFor="password-input">Password</label>
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? 'HIDE' : 'SHOW'}
                </button>
              </div>
              {errors.password && <p className="field-error">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="sign-in-btn"
              id="sign-in-button"
              disabled={loading}
            >
              {loading ? (
                <span className="btn-loader"></span>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="form-help-row">
              <label className="checkbox-label">
                <input type="checkbox" id="remember-check" />
                <span className="custom-check"></span>
                Remember me
              </label>
              <a href="#" className="help-link">Need help?</a>
            </div>
          </form>

          <div className="signup-row">
            <span>New to MyStream? </span>
            <a href="#" className="signup-link">Sign up now.</a>
          </div>

          <p className="recaptcha-text">
            This page is protected by Google reCAPTCHA to ensure you are not a bot.
          </p>
        </div>
      </main>

      <footer className="login-footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Help Centre</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Corporate Information</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Login
