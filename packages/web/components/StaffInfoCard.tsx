'use client';

import { useState, useEffect } from 'react';
import { Card, Button } from '@autocare/ui';

const roleLabels: Record<string, string> = {
  driver: 'Driver', mechanic: 'Mechanic', admin_staff: 'Admin Staff', office: 'Office', other: 'Other',
};

const statusLabels: Record<string, string> = {
  active: 'Active', inactive: 'Inactive', suspended: 'Suspended',
};

const statusColors: Record<string, string> = {
  active: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  inactive: 'bg-gray-50 text-gray-500 border border-gray-200',
  suspended: 'bg-red-50 text-red-700 border border-red-200',
};

const inputClass = 'w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all';
const readonlyClass = 'w-full rounded-lg border border-transparent px-3 py-2 text-sm bg-gray-50 text-gray-700';

export interface StaffForm {
  name: string; role: string; email: string; phone: string;
  licenseNumber: string; licenseClass: string; licenseExpiry: string;
  dateOfBirth: string; address: string; emergencyContact: string;
  emergencyPhone: string; status: string; notes: string; hireDate: string;
}

export interface StaffInfo {
  id: string;
  name: string;
  role: string;
  email?: string | null;
  phone?: string | null;
  licenseNumber?: string | null;
  licenseClass?: string | null;
  licenseExpiry?: string | null;
  dateOfBirth?: string | null;
  address?: string | null;
  emergencyContact?: string | null;
  emergencyPhone?: string | null;
  status: string;
  notes?: string | null;
  hireDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface StaffInfoCardProps {
  staff: StaffInfo;
  saving?: boolean;
  onSave: (form: StaffForm) => Promise<void>;
}

export const emptyStaffForm: StaffForm = {
  name: '', role: 'driver', email: '', phone: '', licenseNumber: '', licenseClass: '', licenseExpiry: '',
  dateOfBirth: '', address: '', emergencyContact: '', emergencyPhone: '', status: 'active', notes: '', hireDate: '',
};

export function StaffInfoCard({ staff, saving, onSave }: StaffInfoCardProps) {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<StaffForm>(emptyStaffForm);
  const [saveError, setSaveError] = useState('');

  useEffect(() => {
    if (!editing) {
      setForm({
        name: staff.name, role: staff.role, email: staff.email ?? '', phone: staff.phone ?? '',
        licenseNumber: staff.licenseNumber ?? '', licenseClass: staff.licenseClass ?? '',
        licenseExpiry: staff.licenseExpiry ?? '', dateOfBirth: staff.dateOfBirth ?? '',
        address: staff.address ?? '', emergencyContact: staff.emergencyContact ?? '',
        emergencyPhone: staff.emergencyPhone ?? '', status: staff.status,
        notes: staff.notes ?? '', hireDate: staff.hireDate ?? '',
      });
      setSaveError('');
    }
  }, [staff, editing]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaveError('');
    try {
      await onSave(form);
      setEditing(false);
    } catch (err: any) {
      setSaveError(err.message || 'Failed to save');
    }
  };

  const handleCancel = () => {
    setForm({
      name: staff.name, role: staff.role, email: staff.email ?? '', phone: staff.phone ?? '',
      licenseNumber: staff.licenseNumber ?? '', licenseClass: staff.licenseClass ?? '',
      licenseExpiry: staff.licenseExpiry ?? '', dateOfBirth: staff.dateOfBirth ?? '',
      address: staff.address ?? '', emergencyContact: staff.emergencyContact ?? '',
      emergencyPhone: staff.emergencyPhone ?? '', status: staff.status,
      notes: staff.notes ?? '', hireDate: staff.hireDate ?? '',
    });
    setEditing(false);
    setSaveError('');
  };

  return (
    <Card title="Staff Information">
      <div className="flex items-center justify-between mb-4">
        <div />
        {editing ? (
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleCancel} disabled={saving}>Cancel</Button>
            <Button onClick={handleSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
          </div>
        ) : (
          <Button onClick={() => setEditing(true)}>Edit Staff</Button>
        )}
      </div>
      {saveError && <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{saveError}</div>}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Name</label>
          {editing ? <input name="name" value={form.name} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.name}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Role</label>
          {editing ? (
            <select name="role" value={form.role} onChange={handleChange} className={inputClass}>
              <option value="driver">Driver</option>
              <option value="mechanic">Mechanic</option>
              <option value="admin_staff">Admin Staff</option>
              <option value="office">Office</option>
              <option value="other">Other</option>
            </select>
          ) : (
            <div className={readonlyClass}>{roleLabels[staff.role] || staff.role}</div>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Status</label>
          {editing ? (
            <select name="status" value={form.status} onChange={handleChange} className={inputClass}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="suspended">Suspended</option>
            </select>
          ) : (
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[staff.status] ?? ''}`}>
              {statusLabels[staff.status] ?? staff.status}
            </span>
          )}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Email</label>
          {editing ? <input name="email" value={form.email} onChange={handleChange} className={inputClass} type="email" /> : <div className={readonlyClass}>{staff.email || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Phone</label>
          {editing ? <input name="phone" value={form.phone} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.phone || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">License Number</label>
          {editing ? <input name="licenseNumber" value={form.licenseNumber} onChange={handleChange} className={inputClass} /> : <div className={`${readonlyClass} font-mono text-xs`}>{staff.licenseNumber || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">License Class</label>
          {editing ? <input name="licenseClass" value={form.licenseClass} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.licenseClass || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">License Expiry</label>
          {editing ? <input name="licenseExpiry" value={form.licenseExpiry} onChange={handleChange} className={inputClass} type="date" /> : <div className={readonlyClass}>{staff.licenseExpiry || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Date of Birth</label>
          {editing ? <input name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className={inputClass} type="date" /> : <div className={readonlyClass}>{staff.dateOfBirth || 'N/A'}</div>}
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Address</label>
          {editing ? <input name="address" value={form.address} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.address || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Emergency Contact</label>
          {editing ? <input name="emergencyContact" value={form.emergencyContact} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.emergencyContact || 'N/A'}</div>}
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Emergency Phone</label>
          {editing ? <input name="emergencyPhone" value={form.emergencyPhone} onChange={handleChange} className={inputClass} /> : <div className={readonlyClass}>{staff.emergencyPhone || 'N/A'}</div>}
        </div>
        <div className="col-span-2">
          <label className="block text-xs font-semibold text-gray-500 mb-1">Notes</label>
          {editing ? <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className={inputClass} /> : <div className={readonlyClass}>{staff.notes || 'No notes'}</div>}
        </div>
      </div>
    </Card>
  );
}

export function StaffEmploymentCard({ staff }: { staff: StaffInfo }) {
  return (
    <Card title="Employment">
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Hire Date</span>
          <span className="text-sm font-medium">{staff.hireDate || 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Created</span>
          <span className="text-sm font-medium">{staff.createdAt ? new Date(staff.createdAt).toLocaleDateString() : 'N/A'}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Last Updated</span>
          <span className="text-sm font-medium">{staff.updatedAt ? new Date(staff.updatedAt).toLocaleDateString() : 'N/A'}</span>
        </div>
      </div>
    </Card>
  );
}
