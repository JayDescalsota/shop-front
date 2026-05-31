'use client';

import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const APP_STORE  = '00000000-0000-0000-0000-202605270001';
const APP_REPAIR = '00000000-0000-0000-0000-202605270002';
const APP_MOBILE = '00000000-0000-0000-0000-202605270003';
const APP_ADMIN      = '00000000-0000-0000-0000-202605270004';
const APP_AUTOMOBILE = '00000000-0000-0000-0000-202605270005';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      const token = data.token;

      localStorage.setItem('token', token);

      const payload = JSON.parse(atob(token.split('.')[1]));
      const apps = payload.app || [];

      if (apps.includes(APP_ADMIN)) {
        router.push('/admin');
      } else if (apps.includes(APP_STORE)) {
        router.push('/store');
      } else if (apps.includes(APP_REPAIR)) {
        router.push('/repair');
      } else if (apps.includes(APP_MOBILE)) {
        router.push('/mobile');
      } else if (apps.includes(APP_AUTOMOBILE)) {
        router.push('/automobile');
      } else {
        router.push('/login');
      }
    } catch {
      setError('Connection failed. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-sidebar p-6">
      <div className="bg-card rounded-2xl px-10 py-12 w-full max-w-sm">
        <div className="text-center mb-9">
          <div className="w-14 h-14 bg-sidebar rounded-2xl flex items-center justify-center text-accent mx-auto mb-5">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
          </div>
          <h1 className="text-xl font-bold mb-1.5">AutoCare Pro</h1>
          <p className="text-sm text-muted" style={{ fontFamily: 'var(--font-open-sans)' }}>Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-xs font-semibold">Email</label>
            <div className="relative">
              <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted" />
              <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full pl-10 pr-3 py-3 border border-border rounded-xl text-sm bg-[#fafafa] outline-none focus:border-primary focus:bg-white placeholder:text-gray-400 transition" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-xs font-semibold">Password</label>
            <div className="relative">
              <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-muted" />
              <input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full pl-10 pr-3 py-3 border border-border rounded-xl text-sm bg-[#fafafa] outline-none focus:border-primary focus:bg-white placeholder:text-gray-400 transition" />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs text-center">{error}</p>}
          <button type="submit" disabled={loading} className="w-full py-3 bg-sidebar text-white rounded-xl text-sm font-semibold cursor-pointer hover:bg-sidebar-hover transition mt-1 disabled:opacity-50">{loading ? 'Signing in...' : 'Sign In'}</button>
        </form>
        <div className="flex items-center gap-4 my-6 text-muted text-xs" style={{ fontFamily: 'var(--font-open-sans)' }}>
          <span className="flex-1 h-px bg-border" /><span>or continue with</span><span className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-col gap-2.5">
          <button className="flex items-center justify-center gap-2.5 w-full py-2.5 bg-card border border-border rounded-xl text-sm font-medium cursor-pointer hover:border-primary hover:bg-[#fafafa] transition" onClick={() => {}}>
            <svg width="20" height="20" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> Google
          </button>
          <button className="flex items-center justify-center gap-2.5 w-full py-2.5 bg-card border border-border rounded-xl text-sm font-medium cursor-pointer hover:border-primary hover:bg-[#fafafa] transition" onClick={() => {}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook
          </button>
        </div>
      </div>
    </div>
  );
}
