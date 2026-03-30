import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('user')
    if (!stored) {
      navigate('/')
      return
    }
    setUser(JSON.parse(stored))
  }, [navigate])

  function handleLogout() {
    localStorage.removeItem('user')
    navigate('/')
  }

  if (!user) return null

  return (
    <div className="dashboard-page">
      <header className="dash-header">
        <div className="dash-logo">MYSTREAM</div>
        <div className="dash-header-right">
          <div className="user-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <button className="logout-btn" id="logout-button" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </header>

      <main className="dash-main">
        <section className="hero-banner">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Welcome back, {user.name}!</h1>
            <p>You have successfully signed in to your account. Start exploring now.</p>
          </div>
        </section>

        <section className="dash-section">
          <h2 className="section-heading">Quick Actions</h2>
          <div className="dash-grid">
            <div className="dash-card">
              <div className="card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e88a2d" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Continue Watching</h3>
              <p>Pick up where you left off with your favourite shows and movies.</p>
            </div>

            <div className="dash-card">
              <div className="card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e88a2d" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>My List</h3>
              <p>Your saved titles are ready and waiting for you to explore.</p>
            </div>

            <div className="dash-card">
              <div className="card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e88a2d" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>Browse</h3>
              <p>Discover new releases, trending content, and hidden gems.</p>
            </div>

            <div className="dash-card">
              <div className="card-icon-wrap">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#e88a2d" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3>Account Settings</h3>
              <p>Manage your profile, subscription, and payment details.</p>
            </div>
          </div>
        </section>

        <section className="dash-section">
          <h2 className="section-heading">Account Details</h2>
          <div className="account-card">
            <div className="account-row">
              <span className="account-label">Name</span>
              <span className="account-value">{user.name}</span>
            </div>
            <div className="account-row">
              <span className="account-label">Email</span>
              <span className="account-value">{user.email}</span>
            </div>
            <div className="account-row">
              <span className="account-label">Plan</span>
              <span className="plan-badge">{user.plan}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
