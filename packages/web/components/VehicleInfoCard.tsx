'use client';

import { Card, Button } from '@autocare/ui';

interface VehicleInfo {
  make: string;
  model: string;
  year?: number | null;
  vin?: string | null;
  licensePlate?: string | null;
  color?: string | null;
  notes?: string | null;
  status: string;
  repairStatus?: string | null;
  customerId?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

interface VehicleFormState {
  make: string;
  model: string;
  year: string;
  vin: string;
  licensePlate: string;
  color: string;
  notes: string;
  status: string;
  repairStatus: string;
}

interface VehicleInfoCardProps {
  vehicle: VehicleInfo;
  editable?: boolean;
  editing?: boolean;
  form?: VehicleFormState;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  onSave?: () => void;
  onCancel?: () => void;
  onEdit?: () => void;
  saving?: boolean;
  saveError?: string;
  showQuickStats?: boolean;
}

const statusLabels: Record<string, string> = {
  running: 'Running', broken: 'Broken', under_maintenance: 'In Shop', out_of_service: 'Out of Service',
};

const statusColors: Record<string, string> = {
  running: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  broken: 'bg-red-50 text-red-700 border border-red-200',
  under_maintenance: 'bg-amber-50 text-amber-700 border border-amber-200',
  out_of_service: 'bg-gray-50 text-gray-500 border border-gray-200',
};

const repairStatusLabels: Record<string, string> = {
  none: 'None', in_progress: 'In Progress', completed: 'Completed',
  awaiting_parts: 'Awaiting Parts', waiting_pickup: 'Waiting Pickup',
};

const inputClass = 'w-full rounded-lg border border-gray-200 px-3 py-2 text-sm bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all';
const readonlyClass = 'w-full rounded-lg border border-transparent px-3 py-2 text-sm bg-gray-50 text-gray-700';

export default function VehicleInfoCard({
  vehicle, editable, editing, form, onChange, onSave, onCancel, onEdit,
  saving, saveError, showQuickStats = true,
}: VehicleInfoCardProps) {
  const status = vehicle.status ?? 'running';
  const repairStatus = vehicle.repairStatus ?? 'none';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2">
        <Card title="Vehicle Information">
          {editable && editing !== undefined && (
            <div className="flex items-center justify-between mb-4">
              <div />
              {editing ? (
                <div className="flex gap-2">
                  <Button variant="outline" onClick={onCancel} disabled={saving}>Cancel</Button>
                  <Button onClick={onSave} disabled={saving}>{saving ? 'Saving...' : 'Save'}</Button>
                </div>
              ) : (
                <Button onClick={onEdit}>Edit Vehicle</Button>
              )}
            </div>
          )}
          {saveError && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">{saveError}</div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <Field name="Make" value={vehicle.make} formValue={form?.make} editing={editing} onChange={onChange} inputClass={inputClass} readonlyClass={readonlyClass} />
            <Field name="Model" value={vehicle.model} formValue={form?.model} editing={editing} onChange={onChange} inputClass={inputClass} readonlyClass={readonlyClass} />
            <Field name="Year" value={vehicle.year?.toString() ?? 'N/A'} formValue={form?.year} editing={editing} onChange={onChange} placeholder="2024" inputClass={inputClass} readonlyClass={readonlyClass} />
            <Field name="Color" value={vehicle.color ?? 'N/A'} formValue={form?.color} editing={editing} onChange={onChange} placeholder="Silver" inputClass={inputClass} readonlyClass={readonlyClass} />
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">VIN</label>
              {editing ? (
                <input name="vin" value={form?.vin ?? ''} onChange={onChange} placeholder="1HGCM82633A004352" className={inputClass} />
              ) : (
                <div className={`${readonlyClass} font-mono text-xs`}>{vehicle.vin ?? 'N/A'}</div>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">License Plate</label>
              {editing ? (
                <input name="licensePlate" value={form?.licensePlate ?? ''} onChange={onChange} placeholder="ABC-1234" className={inputClass} />
              ) : (
                <div className={`${readonlyClass} font-mono`}>{vehicle.licensePlate ?? 'N/A'}</div>
              )}
            </div>
            <div className="col-span-2">
              <label className="block text-xs font-semibold text-gray-500 mb-1">Notes</label>
              {editing ? (
                <textarea name="notes" value={form?.notes ?? ''} onChange={onChange} rows={3} className={inputClass} />
              ) : (
                <div className={readonlyClass}>{vehicle.notes || 'No notes'}</div>
              )}
            </div>
          </div>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <Card title="Status">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Vehicle Status</label>
              {editing ? (
                <select name="status" value={form?.status ?? ''} onChange={onChange} className={inputClass}>
                  <option value="running">Running</option>
                  <option value="broken">Broken</option>
                  <option value="under_maintenance">Under Maintenance</option>
                  <option value="out_of_service">Out of Service</option>
                </select>
              ) : (
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[status] ?? ''}`}>
                  {statusLabels[status] ?? status}
                </span>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Repair Status</label>
              {editing ? (
                <select name="repairStatus" value={form?.repairStatus ?? ''} onChange={onChange} className={inputClass}>
                  <option value="none">None</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="awaiting_parts">Awaiting Parts</option>
                  <option value="waiting_pickup">Waiting Pickup</option>
                </select>
              ) : (
                <div className={readonlyClass}>{repairStatusLabels[repairStatus] ?? repairStatus}</div>
              )}
            </div>
          </div>
        </Card>
        {showQuickStats && (
          <Card title="Quick Stats">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Created</span>
                <span className="text-sm font-medium">{vehicle.createdAt ? new Date(vehicle.createdAt).toLocaleDateString() : 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Last Updated</span>
                <span className="text-sm font-medium">{vehicle.updatedAt ? new Date(vehicle.updatedAt).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function Field({
  name, value, formValue, editing, onChange, placeholder, inputClass, readonlyClass,
}: {
  name: string;
  value: string;
  formValue?: string;
  editing?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  inputClass: string;
  readonlyClass: string;
}) {
  const fieldName = name.toLowerCase();
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 mb-1">{name}</label>
      {editing ? (
        <input name={fieldName} value={formValue ?? ''} onChange={onChange} placeholder={placeholder} className={inputClass} />
      ) : (
        <div className={readonlyClass}>{value}</div>
      )}
    </div>
  );
}
