import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import { registerUser, loginUser, fetchMe, saveSession, getUser, getToken } from '../api';

/* ── SVG icons matching the reference image ─────────────────────────────────── */
const StudentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);

const ParentIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="2.5"/>
    <path d="M4 21v-2a4 4 0 0 1 4-4h2"/>
    <circle cx="17" cy="11" r="2"/>
    <path d="M13 21v-1.5a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3V21"/>
  </svg>
);

const AlumniIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.09 6.26L20 9.27l-4.73 4.6L16.18 20 12 17.27 7.82 20l1.91-6.13L5 9.27l5.91-.01z"/>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

/* ── Role meta ──────────────────────────────────────────────────────────────── */
const ROLES = [
  {
    value: 'student',
    label: 'Student',
    Icon: StudentIcon,
    description: 'Incoming IITB student',
  },
  {
    value: 'parent',
    label: 'Parent',
    Icon: ParentIcon,
    description: 'Parent / guardian accompanying a student',
  },
  {
    value: 'alumni',
    label: 'Alumni',
    Icon: AlumniIcon,
    description: 'IITB alumnus — volunteer as a speaker or mentor',
  },
];

const ROLE_LABELS = Object.fromEntries(ROLES.map(r => [r.value, r.label]));



/* ── Main Auth Component ─────────────────────────────────────────────────────── */
export default function Auth() {
  const navigate                        = useNavigate();
  const [mode, setMode]                 = useState('login');
  const [selectedRole, setSelectedRole] = useState('student');
  const [form, setForm]                 = useState({});
  const [loading, setLoading]           = useState(false);
  const [error, setError]               = useState('');
  const [success, setSuccess]           = useState('');
  const [user, setUser]                 = useState(getUser);

  useEffect(() => {
    if (user && getToken()) {
      navigate('/profile');
    }
  }, [user, navigate]);

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSignup(e) {
    e.preventDefault();
    setError(''); setSuccess(''); setLoading(true);
    try {
      await registerUser({ ...form, role: selectedRole });
      const tokens = await loginUser(form.username, form.password);
      const me     = await fetchMe(tokens.access);
      saveSession(tokens.access, tokens.refresh, me);
      setUser(me);
      setSuccess('Account created successfully. Welcome to SAM!');
    } catch (err) {
      const msg = err?.username?.[0] || err?.email?.[0] || err?.detail || JSON.stringify(err);
      setError(msg);
    } finally { setLoading(false); }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setError(''); setSuccess(''); setLoading(true);
    try {
      const tokens = await loginUser(form.username, form.password);
      const me     = await fetchMe(tokens.access);
      saveSession(tokens.access, tokens.refresh, me);
      setUser(me);
      setSuccess(`Welcome back, ${me.first_name || me.username}!`);
    } catch (err) {
      setError(err?.detail || 'Invalid credentials. Please try again.');
    } finally { setLoading(false); }
  }

  /* ── Logged in → redirect ── */
  if (user && getToken()) {
    return null;
  }

  /* ── Auth form ── */
  return (
    <main className="auth-page">
      <div className="auth-container">

        {/* Left panel */}
        <div className="auth-left">
          {/* Logo */}
          <div className="auth-logo">
            <span className="auth-logo-mark">SAM</span>
            <span className="auth-logo-text">SARC IITB</span>
          </div>

          <div className="auth-left-copy">
            <p className="auth-eyebrow">Join the SAM Community</p>
            <h1>Create Your<br />Account</h1>
            <p className="auth-tagline">
              Register and connect with the IITB alumni network.
            </p>
          </div>

          {/* Role cards */}
          <div className="auth-role-preview">
            {ROLES.map(r => (
              <div className="role-preview-item" key={r.value}>
                <div className="role-preview-icon">
                  <r.Icon />
                </div>
                <div>
                  <strong>{r.label}</strong>
                  <p>{r.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form panel */}
        <div className="auth-right">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
              onClick={() => { setMode('login'); setError(''); setSuccess(''); }}
            >Login</button>
            <button
              className={`auth-tab ${mode === 'signup' ? 'active' : ''}`}
              onClick={() => { setMode('signup'); setError(''); setSuccess(''); }}
            >Sign Up</button>
          </div>

          {error   && <div className="auth-alert error">{error}</div>}
          {success && <div className="auth-alert success">{success}</div>}

          {/* ── LOGIN ── */}
          {mode === 'login' && (
            <form className="auth-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="login-username">Username</label>
                <input id="login-username" name="username" type="text"
                  placeholder="your_username" required onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="login-password">Password</label>
                <input id="login-password" name="password" type="password"
                  placeholder="••••••••" required onChange={handleChange} />
              </div>
              <button className="auth-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Logging in…' : 'Login'}
              </button>
              <p className="auth-switch">
                Don't have an account?{' '}
                <button type="button" onClick={() => setMode('signup')}>Sign Up</button>
              </p>
            </form>
          )}

          {/* ── SIGN UP ── */}
          {mode === 'signup' && (
            <form className="auth-form" onSubmit={handleSignup}>

              {/* Role selector */}
              <div className="form-group">
                <label>I am a…</label>
                <div className="role-selector">
                  {ROLES.map(r => (
                    <button
                      key={r.value}
                      type="button"
                      className={`role-card ${selectedRole === r.value ? 'active' : ''}`}
                      onClick={() => setSelectedRole(r.value)}
                    >
                      <div className="role-card-icon">
                        <r.Icon />
                      </div>
                      <div className="role-card-text">
                        <strong>{r.label}</strong>
                        <span>{r.description}</span>
                      </div>
                      {selectedRole === r.value && (
                        <div className="role-card-check"><CheckIcon /></div>
                      )}
                    </button>
                  ))}
                </div>
                {selectedRole === 'alumni' && (
                  <p className="role-hint">You'll be registered as a <strong>Volunteer</strong> at the event you choose.</p>
                )}
                {(selectedRole === 'student' || selectedRole === 'parent') && (
                  <p className="role-hint">You'll be registered as an <strong>Attendee</strong> at the event you choose.</p>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="su-fname">First Name</label>
                  <input id="su-fname" name="first_name" type="text"
                    placeholder="Aarav" required onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="su-lname">Last Name</label>
                  <input id="su-lname" name="last_name" type="text"
                    placeholder="Sharma" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="su-username">Username</label>
                <input id="su-username" name="username" type="text"
                  placeholder="aarav_sharma" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="su-email">Email</label>
                <input id="su-email" name="email" type="email"
                  placeholder="aarav@example.com" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="su-contact">Contact Number</label>
                <input id="su-contact" name="contact_number" type="tel"
                  placeholder="+91 98765 43210" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="su-password">Password</label>
                <input id="su-password" name="password" type="password"
                  placeholder="Create a strong password" required onChange={handleChange} />
              </div>

              <button className="auth-submit-btn" type="submit" disabled={loading}>
                {loading ? 'Creating account…' : `Create Account as ${ROLE_LABELS[selectedRole]}`}
              </button>

              <p className="auth-switch">
                Already have an account?{' '}
                <button type="button" onClick={() => setMode('login')}>Login</button>
              </p>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
