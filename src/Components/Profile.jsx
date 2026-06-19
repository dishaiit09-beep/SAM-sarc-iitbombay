import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { getUser, getToken, fetchMyRegistrations, updateProfile, saveSession, getRefresh, clearSession } from '../api';

/* ── SVG role icons (same as Auth.jsx) ─────────────────────────────────────── */
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
const EditIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);
const SaveIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const LockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);
const LogoutIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const PRESET_AVATARS = [
  {
    name: 'Hexagon',
    data: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230b132b"/><polygon points="50,15 80,32.5 80,67.5 50,85 20,67.5 20,32.5" fill="none" stroke="%23d4af37" stroke-width="4"/><polygon points="50,30 70,42 70,58 50,70 30,58 30,42" fill="none" stroke="%23d4af37" stroke-width="2.5"/><circle cx="50" cy="50" r="10" fill="%23d4af37"/></svg>'
  },
  {
    name: 'Orbit',
    data: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230b132b"/><circle cx="50" cy="50" r="35" fill="none" stroke="%23d4af37" stroke-width="3"/><circle cx="50" cy="50" r="22" fill="none" stroke="%23d4af37" stroke-width="2" stroke-dasharray="6,4"/><circle cx="50" cy="50" r="10" fill="none" stroke="%23d4af37" stroke-width="4"/><circle cx="85" cy="50" r="6" fill="%23d4af37"/><circle cx="50" cy="28" r="4" fill="%23d4af37"/></svg>'
  },
  {
    name: 'Waves',
    data: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230b132b"/><path d="M 20,50 Q 35,20 50,50 T 80,50" fill="none" stroke="%23d4af37" stroke-width="4" stroke-linecap="round"/><path d="M 20,65 Q 35,35 50,65 T 80,65" fill="none" stroke="%23d4af37" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/><path d="M 20,35 Q 35,5 50,35 T 80,35" fill="none" stroke="%23d4af37" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/></svg>'
  },
  {
    name: 'Crown',
    data: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230b132b"/><path d="M 20,75 L 20,40 L 35,55 L 50,30 L 65,55 L 80,40 L 80,75 Z" fill="none" stroke="%23d4af37" stroke-width="4" stroke-linejoin="round"/><line x1="20" y1="70" x2="80" y2="70" stroke="%23d4af37" stroke-width="3"/><circle cx="20" cy="35" r="4" fill="%23d4af37"/><circle cx="50" cy="25" r="5" fill="%23d4af37"/><circle cx="80" cy="35" r="4" fill="%23d4af37"/></svg>'
  }
];

const ROLE_META = {
  student: { Icon: StudentIcon, label: 'Student',  color: 'role-student' },
  parent:  { Icon: ParentIcon,  label: 'Parent',   color: 'role-parent' },
  alumni:  { Icon: AlumniIcon,  label: 'Alumni',   color: 'role-alumni' },
};

/* ── Editable field component ────────────────────────────────────────────────── */
function EditableField({ label, name, value, editing, onChange }) {
  return (
    <div className={`pf-field ${editing ? 'is-editing' : ''}`}>
      <span className="pf-field-label">{label}</span>
      {editing ? (
        <input
          className="pf-field-input"
          name={name}
          value={value || ''}
          onChange={onChange}
          autoComplete="off"
        />
      ) : (
        <span className="pf-field-value">{value || <em className="pf-empty">—</em>}</span>
      )}
    </div>
  );
}

/* ── Main Profile Page ───────────────────────────────────────────────────────── */
export default function Profile() {
  const navigate    = useNavigate();
  const storedUser  = getUser();

  // Redirect if not logged in
  useEffect(() => {
    if (!storedUser || !getToken()) navigate('/register');
  }, [navigate, storedUser]);

  const [user, setUser]               = useState(storedUser || {});
  const [registrations, setRegs]      = useState([]);
  const [editing, setEditing]         = useState(false);
  const [form, setForm]               = useState({});
  const [saving, setSaving]           = useState(false);
  const [saveMsg, setSaveMsg]         = useState('');
  const [saveErr, setSaveErr]         = useState('');

  useEffect(() => {
    if (storedUser && getToken()) {
      fetchMyRegistrations().then(setRegs).catch(() => {});
    }
  }, [storedUser]);

  function triggerFileSelect() {
    document.getElementById('avatar-file-input')?.click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1.5 * 1024 * 1024) {
        setSaveErr('Avatar image size must be under 1.5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm(f => ({ ...f, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }

  function startEdit() {
    setForm({
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      avatar: user.avatar
    });
    setSaveMsg(''); setSaveErr('');
    setEditing(true);
  }

  function cancelEdit() {
    setEditing(false);
    setSaveMsg(''); setSaveErr('');
  }

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSave() {
    setSaving(true); setSaveMsg(''); setSaveErr('');
    try {
      const updated = await updateProfile(form);
      // Persist updated user to localStorage
      saveSession(getToken(), getRefresh(), updated);
      setUser(updated);
      setEditing(false);
      setSaveMsg('Profile updated successfully.');
    } catch (err) {
      const msg = err?.username?.[0] || err?.email?.[0] || err?.detail || 'Save failed. Try again.';
      setSaveErr(msg);
    } finally { setSaving(false); }
  }

  function handleLogout() {
    clearSession();
    navigate('/');
  }

  if (!user.username) return null;

  const roleMeta = ROLE_META[user.role] || { Icon: StudentIcon, label: user.role, color: 'role-student' };

  return (
    <main className="profile-page">
      <div className="profile-wrap">

        {/* ── LEFT COLUMN: Avatar + meta ── */}
        <aside className="profile-aside">
          <div className="profile-avatar">
            <div 
              className={`avatar-ring ${roleMeta.color} ${editing ? 'avatar-editing' : ''}`}
              onClick={editing ? triggerFileSelect : null}
              title={editing ? "Click to upload a custom profile image" : ""}
            >
              <div className="avatar-icon">
                {editing ? (
                  form.avatar ? (
                    <img src={form.avatar} alt="Avatar" className="profile-avatar-img" />
                  ) : user.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="profile-avatar-img" />
                  ) : (
                    <roleMeta.Icon />
                  )
                ) : (
                  user.avatar ? (
                    <img src={user.avatar} alt="Avatar" className="profile-avatar-img" />
                  ) : (
                    <roleMeta.Icon />
                  )
                )}
                {editing && (
                  <div className="avatar-upload-overlay">
                    <span className="camera-icon">📷</span>
                  </div>
                )}
              </div>
            </div>
            {editing && (
              <input
                type="file"
                id="avatar-file-input"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: 'none' }}
              />
            )}
          </div>

          {editing && (
            <div className="avatar-presets">
              <span className="presets-label">Select Avatar Preset:</span>
              <div className="presets-grid">
                {PRESET_AVATARS.map(p => (
                  <button
                    key={p.name}
                    type="button"
                    className={`preset-btn ${(form.avatar || '') === p.data ? 'active' : ''}`}
                    onClick={() => setForm(f => ({ ...f, avatar: p.data }))}
                    title={p.name}
                  >
                    <img src={p.data} alt={p.name} />
                  </button>
                ))}
                <button
                  type="button"
                  className={`preset-btn reset-btn ${!(form.avatar || '') ? 'active' : ''}`}
                  onClick={() => setForm(f => ({ ...f, avatar: '' }))}
                  title="Default Role Icon"
                >
                  <span className="reset-icon">🔄</span>
                </button>
              </div>
            </div>
          )}

          <h2 className="profile-display-name">
            {user.first_name || user.username}
            {user.last_name ? ` ${user.last_name}` : ''}
          </h2>
          <p className="profile-at">@{user.username}</p>

          <span className={`profile-role-badge ${roleMeta.color}`}>
            <roleMeta.Icon /> {roleMeta.label}
          </span>

          {/* Stats */}
          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-num">{registrations.length}</span>
              <span className="stat-label">{user.role === 'alumni' ? 'Slots' : 'Registrations'}</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <span className="stat-num">{registrations.filter(r => r.status === 'confirmed').length}</span>
              <span className="stat-label">Confirmed</span>
            </div>
          </div>

          {/* Locked contact */}
          <div className="profile-contact-locked">
            <LockIcon />
            <span>{user.contact_number || 'No contact'}</span>
          </div>

          {/* Logout */}
          <button className="profile-logout-btn" onClick={handleLogout}>
            <LogoutIcon />
            Sign Out
          </button>
        </aside>

        {/* ── RIGHT COLUMN: Details ── */}
        <section className="profile-main">

          {/* Header */}
          <div className="profile-section-header">
            <div>
              <p className="profile-kicker">Account</p>
              <h3>Profile Details</h3>
            </div>
            <div className="profile-edit-actions">
              {editing ? (
                <>
                  <button className="pf-btn-cancel" onClick={cancelEdit} disabled={saving}>Cancel</button>
                  <button className="pf-btn-save" onClick={handleSave} disabled={saving}>
                    <SaveIcon /> {saving ? 'Saving…' : 'Save Changes'}
                  </button>
                </>
              ) : (
                <button className="pf-btn-edit" onClick={startEdit}>
                  <EditIcon /> Edit Profile
                </button>
              )}
            </div>
          </div>

          {saveMsg && <div className="pf-alert success">{saveMsg}</div>}
          {saveErr && <div className="pf-alert error">{saveErr}</div>}

          {/* Editable fields grid */}
          <div className="pf-fields-grid">
            <EditableField label="First Name"  name="first_name" value={editing ? form.first_name : user.first_name} editing={editing} onChange={handleChange} />
            <EditableField label="Last Name"   name="last_name"  value={editing ? form.last_name  : user.last_name}  editing={editing} onChange={handleChange} />
            <EditableField label="Username"    name="username"   value={editing ? form.username   : user.username}   editing={editing} onChange={handleChange} />
            <EditableField label="Email"       name="email"      value={editing ? form.email      : user.email}      editing={editing} onChange={handleChange} />

            {/* Contact — always locked */}
            <div className="pf-field pf-field-locked">
              <span className="pf-field-label">Contact Number</span>
              <div className="pf-field-locked-row">
                <span className="pf-field-value">{user.contact_number || '—'}</span>
                <span className="pf-lock-badge"><LockIcon /> Locked</span>
              </div>
            </div>

            {/* Role — always locked */}
            <div className="pf-field pf-field-locked">
              <span className="pf-field-label">Role</span>
              <div className="pf-field-locked-row">
                <span className={`pf-role-chip ${roleMeta.color}`}><roleMeta.Icon /> {roleMeta.label}</span>
                <span className="pf-lock-badge"><LockIcon /> Locked</span>
              </div>
            </div>
          </div>

          {/* ── Event Registrations ── */}
          <div className="profile-section-header" style={{ marginTop: '2rem' }}>
            <div>
              <p className="profile-kicker">{user.role === 'alumni' ? 'Volunteering' : 'Events'}</p>
              <h3>{user.role === 'alumni' ? 'Your Volunteer Slots' : 'Your Registrations'}</h3>
            </div>
          </div>

          {!Array.isArray(registrations) || registrations.length === 0 ? (
            <div className="pf-empty-regs">
              <MapPinIcon />
              <p>No registrations yet.</p>
              <button className="pf-go-home" onClick={() => navigate('/')}>Browse City Events</button>
            </div>
          ) : (
            <div className="pf-reg-list">
              {registrations.map(reg => (
                <div key={reg.id} className="pf-reg-card">
                  <div className="pf-reg-city">
                    <MapPinIcon />
                    <strong>{reg.city_name}</strong>
                  </div>
                  <div className="pf-reg-chips">
                    <span className={`pf-chip type-${reg.participation_type}`}>
                      {reg.participation_type === 'volunteer' ? '🏆 Volunteer' : '🎟 Attendee'}
                    </span>
                    <span className={`pf-chip status-${reg.status}`}>{reg.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>
      </div>
    </main>
  );
}
