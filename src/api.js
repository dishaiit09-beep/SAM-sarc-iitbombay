// src/api.js - Centralised API layer for the SAM frontend
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

// ── Token helpers ─────────────────────────────────────────────────────────────
export const getToken   = () => localStorage.getItem('sam_access_token');
export const getRefresh = () => localStorage.getItem('sam_refresh_token');
export const getUser    = () => {
  try { return JSON.parse(localStorage.getItem('sam_user')); }
  catch { return null; }
};

export const saveSession = (access, refresh, user) => {
  localStorage.setItem('sam_access_token',  access);
  localStorage.setItem('sam_refresh_token', refresh);
  localStorage.setItem('sam_user',          JSON.stringify(user));
  window.dispatchEvent(new Event('sam_auth_change'));
};

export const clearSession = () => {
  localStorage.removeItem('sam_access_token');
  localStorage.removeItem('sam_refresh_token');
  localStorage.removeItem('sam_user');
  window.dispatchEvent(new Event('sam_auth_change'));
};

// ── HTTP helpers ──────────────────────────────────────────────────────────────
const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${getToken()}`,
});

// ── Auth API ──────────────────────────────────────────────────────────────────
export async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/auth/register/`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}

export async function loginUser(username, password) {
  const res = await fetch(`${BASE_URL}/auth/login/`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ username, password }),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json; // { access, refresh }
}

export async function fetchMe(token) {
  const res = await fetch(`${BASE_URL}/auth/me/`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json; // { id, username, email, first_name, last_name, role, … }
}

export async function updateProfile(data) {
  const res = await fetch(`${BASE_URL}/auth/me/`, {
    method:  'PATCH',
    headers: authHeaders(),
    body:    JSON.stringify(data),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}

// ── Events API ────────────────────────────────────────────────────────────────
export async function fetchCityEvents() {
  const res = await fetch(`${BASE_URL}/events/cities/`);
  return res.json();
}

export async function fetchMyRegistrations() {
  const res = await fetch(`${BASE_URL}/events/register/`, {
    headers: authHeaders(),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}

export async function registerForEvent(eventId) {
  const res = await fetch(`${BASE_URL}/events/register/`, {
    method:  'POST',
    headers: authHeaders(),
    body:    JSON.stringify({ event: eventId }),
  });
  const json = await res.json();
  if (!res.ok) throw json;
  return json;
}
