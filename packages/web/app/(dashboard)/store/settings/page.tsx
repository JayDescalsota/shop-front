'use client';

import { PageHeader, Card, Button } from '@autocare/ui';
import {
  BuildingStorefrontIcon,
  BellIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const sections = [
  { id: 'general', label: 'General', icon: BuildingStorefrontIcon },
  { id: 'notifications', label: 'Notifications', icon: BellIcon },
  { id: 'users', label: 'Users', icon: ShieldCheckIcon },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('general');
  return (
    <>
      <PageHeader title="Settings" description="Manage your store configuration" />
      <div className="flex gap-6 items-start">
        <nav className="w-[200px] shrink-0 bg-card border border-border rounded-xl p-2 flex flex-col gap-0.5 sticky top-8">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <button key={s.id} className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg w-full text-left text-sm font-medium cursor-pointer transition ${activeSection === s.id ? 'bg-sidebar text-white' : 'bg-transparent text-muted hover:bg-surface hover:text-primary'}`} onClick={() => setActiveSection(s.id)}>
                <span className="w-[18px] h-[18px] flex items-center justify-center"><Icon className="w-[18px] h-[18px]" /></span>
                {s.label}
              </button>
            );
          })}
        </nav>
        <div className="flex-1 min-w-0 max-w-[640px]">
          {activeSection === 'general' && <GeneralSettings />}
          {activeSection === 'notifications' && <NotificationSettings />}
          {activeSection === 'users' && <UserSettings />}
        </div>
      </div>
    </>
  );
}

function GeneralSettings() {
  return (
    <Card title="Store Information">
      <div className="grid grid-cols-2 gap-4">
        {[{ id: 'storeName', label: 'Store Name', placeholder: 'AutoCare Parts' },
          { id: 'address', label: 'Address', placeholder: '123 Main Street' },
          { id: 'phone', label: 'Phone', placeholder: '(555) 000-0000' },
          { id: 'email', label: 'Email', placeholder: 'store@autocarepro.com' },
        ].map((f) => (
          <div key={f.id} className="flex flex-col gap-1.5">
            <label htmlFor={f.id} className="text-xs font-semibold">{f.label}</label>
            <input id={f.id} type="text" placeholder={f.placeholder} className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-[#fafafa] outline-none focus:border-primary focus:bg-white transition" />
          </div>
        ))}
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold">Timezone</label>
          <select className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-[#fafafa] outline-none focus:border-primary focus:bg-white transition appearance-none cursor-pointer" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px' }}>
            <option>America/New_York</option><option>America/Chicago</option><option>America/Denver</option><option>America/Los_Angeles</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold">Currency</label>
          <select className="w-full px-3 py-2.5 border border-border rounded-lg text-sm bg-[#fafafa] outline-none focus:border-primary focus:bg-white transition appearance-none cursor-pointer" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '36px' }}>
            <option>USD ($)</option><option>EUR (€)</option><option>GBP (£)</option>
          </select>
        </div>
      </div>
      <div className="mt-6 pt-5 border-t border-border flex gap-2"><Button>Save Changes</Button></div>
    </Card>
  );
}

function NotificationSettings() {
  return (
    <>
      <Card title="Email Notifications">
        <ToggleItem label="Low stock alerts" defaultChecked />
        <ToggleItem label="Purchase order received" defaultChecked />
        <ToggleItem label="Supplier updates" />
        <ToggleItem label="New product approval needed" defaultChecked />
        <div className="mt-6 pt-5 border-t border-border flex gap-2"><Button>Save Changes</Button></div>
      </Card>
      <Card title="SMS Notifications">
        <ToggleItem label="Urgent stock alerts" defaultChecked />
        <ToggleItem label="Delivery confirmed" />
        <ToggleItem label="Order delays" defaultChecked />
        <div className="mt-6 pt-5 border-t border-border flex gap-2"><Button>Save Changes</Button></div>
      </Card>
    </>
  );
}

function UserSettings() {
  return (
    <Card title="Admin Users" action={<Button variant="outline">+ Invite User</Button>}>
      <table className="w-full border-collapse">
        <thead><tr>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Name</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Email</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Role</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Status</th>
        </tr></thead>
        <tbody><tr>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">Admin</td>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">admin@autocarepro.com</td>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">Owner</td>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary"><span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold status-completed">Active</span></td>
        </tr></tbody>
      </table>
    </Card>
  );
}

function ToggleItem({ label, defaultChecked }: { label: string; defaultChecked?: boolean }) {
  const [on, setOn] = useState(defaultChecked ?? false);
  return (
    <label className="flex items-center justify-between py-3 cursor-pointer border-b border-border text-sm last:border-b-0">
      <span>{label}</span>
      <div className={`w-10 h-[22px] rounded-full relative transition shrink-0 cursor-pointer ${on ? 'bg-primary' : 'bg-border'}`} onClick={() => setOn(!on)}>
        <div className={`w-[18px] h-[18px] bg-white rounded-full absolute top-0.5 left-0.5 transition shadow-sm ${on ? 'translate-x-[18px]' : ''}`} />
      </div>
    </label>
  );
}
