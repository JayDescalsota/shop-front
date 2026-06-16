'use client';

import { PageHeader, Card, Button, Modal, Field, FieldSet, FormActions, ErrorBanner } from '@autocare/ui';
import { WrenchScrewdriverIcon, BellIcon, ShieldCheckIcon, WrenchIcon, CubeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useState, useMemo, useRef, useEffect } from 'react';
import { useShopServicesQuery, useCreateShopServiceMutation, useDeleteShopServiceMutation, useShopPartsQuery, useCreateShopPartMutation, useDeleteShopPartMutation, useAddPartBatchMutation, useDeletePartBatchMutation, usePartNamesQuery, useVehicleMakesQuery, useVehicleModelsQuery, useStorageLocationsQuery, useShopToolsQuery, useCreateShopToolMutation, useUpdateShopToolMutation, useDeleteShopToolMutation, useServiceTypesQuery } from '@/graphql/generated/hooks';
import type { CreateShopToolInput, UpdateShopToolInput } from '@/graphql/generated/index';

const sections = [
  { id: 'general', label: 'General', icon: WrenchScrewdriverIcon },
  { id: 'notifications', label: 'Notifications', icon: BellIcon },
  { id: 'users', label: 'Users', icon: ShieldCheckIcon },
  { id: 'services', label: 'Services', icon: ClipboardDocumentListIcon },
  { id: 'parts', label: 'Parts', icon: CubeIcon },
  { id: 'tools', label: 'Tools', icon: WrenchIcon },
];

export default function Settings() {
  const [activeSection, setActiveSection] = useState('general');
  return (
    <>
      <PageHeader title="Settings" description="Manage your repair shop configuration" />
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
          {activeSection === 'services' && <ServicesSettings />}
          {activeSection === 'parts' && <PartsSettings />}
          {activeSection === 'tools' && <ToolsSettings />}
        </div>
      </div>
    </>
  );
}

function GeneralSettings() {
  return (
    <Card title="Shop Information">
      <div className="grid grid-cols-2 gap-4">
        {[{ id: 'shopName', label: 'Shop Name', placeholder: 'AutoCare Repair' },
          { id: 'address', label: 'Address', placeholder: '456 Oak Avenue' },
          { id: 'phone', label: 'Phone', placeholder: '(555) 000-0000' },
          { id: 'email', label: 'Email', placeholder: 'repair@autocarepro.com' },
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
        <ToggleItem label="New appointment booked" defaultChecked />
        <ToggleItem label="Appointment reminders" defaultChecked />
        <ToggleItem label="Invoice overdue" defaultChecked />
        <ToggleItem label="Customer feedback received" />
        <div className="mt-6 pt-5 border-t border-border flex gap-2"><Button>Save Changes</Button></div>
      </Card>
      <Card title="SMS Notifications">
        <ToggleItem label="Daily appointment summary" defaultChecked />
        <ToggleItem label="Urgent alerts" />
        <ToggleItem label="Promotional offers" defaultChecked />
        <div className="mt-6 pt-5 border-t border-border flex gap-2"><Button>Save Changes</Button></div>
      </Card>
    </>
  );
}

function UserSettings() {
  return (
    <Card title="Staff Members" action={<Button variant="outline">+ Invite Staff</Button>}>
      <table className="w-full border-collapse">
        <thead><tr>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Name</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Email</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Role</th>
          <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Status</th>
        </tr></thead>
        <tbody><tr>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">John Smith</td>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">john@autocarepro.com</td>
          <td className="px-4 py-3.5 text-sm border-b border-border text-primary">Mechanic</td>
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

function ServicesSettings() {
  const { data, refetch } = useShopServicesQuery();
  const { data: lookupData } = useServiceTypesQuery({ fetchPolicy: 'cache-first' });
  const [createService] = useCreateShopServiceMutation();
  const [deleteService] = useDeleteShopServiceMutation();
  const [addOpen, setAddOpen] = useState(false);
  const [selectedTypeId, setSelectedTypeId] = useState('');
  const [searchText, setSearchText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0, width: 0 });
  const [filterCategory, setFilterCategory] = useState('');
  const [filterSystem, setFilterSystem] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  const updateDropPos = () => {
    if (inputRef.current) {
      const r = inputRef.current.getBoundingClientRect();
      setDropPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }
  };

  useEffect(() => {
    if (!showDropdown) return;
    const handle = () => updateDropPos();
    window.addEventListener('scroll', handle, true);
    window.addEventListener('resize', handle);
    return () => { window.removeEventListener('scroll', handle, true); window.removeEventListener('resize', handle); };
  }, [showDropdown]);

  const services = data?.shopServices?.items ?? [];
  const lookupTypes = lookupData?.serviceTypes ?? [];

  const categories = useMemo(() => {
    const cats = new Set(lookupTypes.map((t) => t.category).filter(Boolean));
    return [...cats].sort();
  }, [lookupTypes]);

  const systems = useMemo(() => {
    const sys = new Set(
      lookupTypes
        .filter((t) => !filterCategory || t.category === filterCategory)
        .map((t) => t.system).filter(Boolean),
    );
    return [...sys].sort();
  }, [lookupTypes, filterCategory]);

  const filteredTypes = useMemo(() => {
    return lookupTypes.filter((t) => {
      if (filterCategory && t.category !== filterCategory) return false;
      if (filterSystem && t.system !== filterSystem) return false;
      return true;
    });
  }, [lookupTypes, filterCategory, filterSystem]);

  const searchWords = searchText.toLowerCase().split(/\s+/).filter(Boolean);

  const searchedTypes = useMemo(() => {
    if (!searchWords.length) return filteredTypes;
    return filteredTypes.filter((t) => {
      const name = t.name.toLowerCase();
      return searchWords.every((w) => name.includes(w));
    });
  }, [filteredTypes, searchWords, searchText]);

  const selectedName = selectedTypeId ? lookupTypes.find((t) => t.id === selectedTypeId)?.name : '';

  const handleSelect = (id: string) => {
    setSelectedTypeId(id);
    setSearchText(lookupTypes.find((t) => t.id === id)?.name || '');
    setShowDropdown(false);
  };

  const handleAdd = async () => {
    if (!selectedTypeId) return;
    setError('');
    setSubmitting(true);
    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) { setError('No tenant selected.'); setSubmitting(false); return; }
    const st = lookupTypes.find((t) => t.id === selectedTypeId);
    if (!st) { setError('Service type not found.'); setSubmitting(false); return; }
    try {
      const res = await createService({ variables: { input: { tenantId: tid as any, serviceTypeId: selectedTypeId, name: st.name, code: st.code, system: st.system, category: st.category, estimatedHours: st.estimatedHours } } });
      if (!res.data?.createShopService) { setError(res.errors?.[0]?.message || 'Failed to add service'); return; }
      setAddOpen(false); setSelectedTypeId(''); setSearchText(''); setFilterCategory(''); setFilterSystem(''); refetch();
    } catch (err: any) { setError(err.message || 'An error occurred'); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteService({ variables: { id } });
      if (res.data?.deleteShopService) refetch();
    } catch { }
  };

  const available = lookupTypes.filter((lt) => !services.some((s) => s.id === lt.id));

  return (
    <>
      <Card title="Offered Services" action={<Button onClick={() => { setError(''); setAddOpen(true); setSearchText(''); setShowDropdown(false); }}>+ Add Service</Button>}>
        {services.length === 0 ? (
          <p className="text-sm text-gray-400">No services added yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead><tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Name</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">System</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Est. Hours</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Actions</th>
            </tr></thead>
            <tbody>
              {services.map((s) => (
                <tr key={s.id}>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{s.name}</td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{s.system || '—'}</td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{s.estimatedHours ?? '—'}</td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-right">
                    <button onClick={() => handleDelete(s.id)} className="text-red-500 hover:underline text-xs font-semibold cursor-pointer">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Modal open={addOpen} onClose={() => { setAddOpen(false); setSelectedTypeId(''); setSearchText(''); setFilterCategory(''); setFilterSystem(''); }} title="Add Service" size="l">
        <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }} className="space-y-4">
          <ErrorBanner message={error} />
          <div className="grid grid-cols-2 gap-3">
            <Field label="Category">
              <select value={filterCategory} onChange={(e) => { setFilterCategory(e.target.value); setFilterSystem(''); }} className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="">All Categories</option>
                {categories.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="System">
              <select value={filterSystem} onChange={(e) => setFilterSystem(e.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="">All Systems</option>
                {systems.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </Field>
          </div>
          <Field label="Service Type" required>
            <div ref={inputRef}>
              <input
                type="text"
                value={searchText}
                onChange={(e) => { setSearchText(e.target.value); setSelectedTypeId(''); setShowDropdown(true); }}
                onFocus={() => { updateDropPos(); setShowDropdown(true); }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Type to search services..."
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            {showDropdown && searchedTypes.length > 0 && (
              <div
                style={{ position: 'fixed', top: dropPos.top, left: dropPos.left, width: dropPos.width, zIndex: 9999 }}
                className="rounded border border-gray-200 bg-white shadow-lg max-h-60 overflow-y-auto"
              >
                {searchedTypes.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onMouseDown={() => handleSelect(t.id)}
                    className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer ${t.id === selectedTypeId ? 'bg-blue-50 font-semibold' : ''}`}
                  >
                    {t.name} <span className="text-muted">({t.system})</span>
                  </button>
                ))}
              </div>
            )}
            {showDropdown && searchText && searchedTypes.length === 0 && (
              <div
                style={{ position: 'fixed', top: dropPos.top, left: dropPos.left, width: dropPos.width, zIndex: 9999 }}
                className="rounded border border-gray-200 bg-white shadow-lg p-3 text-sm text-muted"
              >
                No services match "{searchText}"
              </div>
            )}
          </Field>
          <FormActions onCancel={() => { setAddOpen(false); setSelectedTypeId(''); setSearchText(''); setFilterCategory(''); setFilterSystem(''); }} submitting={submitting} submitLabel="Add Service" />
        </form>
      </Modal>
    </>
  );
}

function PartsSettings() {
  const { data, refetch } = useShopPartsQuery();
  const { data: partNamesData } = usePartNamesQuery({ fetchPolicy: 'cache-first' });
  const { data: makesData } = useVehicleMakesQuery({ fetchPolicy: 'cache-first' });
  const [selectedMake, setSelectedMake] = useState('');
  const { data: modelsData } = useVehicleModelsQuery({ variables: { makeId: selectedMake || '00000000-0000-0000-0000-000000000000' }, skip: !selectedMake, fetchPolicy: 'cache-first' });
  const { data: locationsData } = useStorageLocationsQuery({ fetchPolicy: 'cache-first' });
  const [createPart] = useCreateShopPartMutation();
  const [deletePart] = useDeleteShopPartMutation();
  const [addBatch] = useAddPartBatchMutation();
  const [deleteBatch] = useDeletePartBatchMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [selectedPartId, setSelectedPartId] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropPos, setDropPos] = useState({ top: 0, left: 0, width: 0 });
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLDivElement>(null);

  const parts = data?.shopParts?.items ?? [];
  const partNames = partNamesData?.partNames ?? [];
  const makes = makesData?.vehicleMakes ?? [];
  const locations = locationsData?.storageLocations ?? [];

  const years = useMemo(() => {
    const y = [];
    for (let i = 2026; i >= 2001; i--) y.push(i);
    return y;
  }, []);

  const models = modelsData?.vehicleModels ?? [];

  const searchWords = searchText.toLowerCase().split(/\s+/).filter(Boolean);

  const filteredPartNames = useMemo(() => {
    if (!searchWords.length) return partNames;
    return partNames.filter((p) => {
      const n = p.name.toLowerCase();
      return searchWords.every((w) => n.includes(w));
    });
  }, [partNames, searchWords, searchText]);

  const updateDropPos = () => {
    if (inputRef.current) {
      const r = inputRef.current.getBoundingClientRect();
      setDropPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }
  };

  useEffect(() => {
    if (!showDropdown) return;
    const handle = () => updateDropPos();
    window.addEventListener('scroll', handle, true);
    window.addEventListener('resize', handle);
    return () => { window.removeEventListener('scroll', handle, true); window.removeEventListener('resize', handle); };
  }, [showDropdown]);

  const openAdd = () => {
    setSearchText(''); setSelectedPartId(''); setSelectedMake(''); setSelectedModel(''); setSelectedYear(''); setSelectedLocation(''); setError(''); setModalOpen(true);
  };

  const handleSelectPart = (id: string) => {
    setSelectedPartId(id);
    setSearchText(partNames.find((p) => p.id === id)?.name || '');
    setShowDropdown(false);
  };

  const handleSubmit = async () => {
    setError('');
    if (!selectedPartId) { setError('Please select a part name.'); return; }
    setSubmitting(true);
    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) { setError('No tenant selected.'); setSubmitting(false); return; }

    try {
      const selected = partNames.find((p) => p.id === selectedPartId);
      if (!selected) { setError('Selected part not found.'); setSubmitting(false); return; }
      const res = await createPart({
        variables: {
          input: {
            tenantId: tid as any,
            name: selected.name,
            makeId: selectedMake || null,
            modelId: selectedModel || null,
            year: selectedYear ? parseInt(selectedYear) : null,
            locationId: selectedLocation || null,
          },
        },
      });
      if (!res.data?.createShopPart) { setError(res.errors?.[0]?.message || 'Failed to create part'); return; }
      setModalOpen(false); refetch();
    } catch (err: any) { setError(err.message || 'An error occurred'); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deletePart({ variables: { id } });
      if (res.data?.deleteShopPart) refetch();
    } catch { }
  };

  const handleAddBatch = async (partId: string) => {
    const q = prompt('Quantity:');
    if (!q) return;
    const c = prompt('Unit cost:');
    if (!c) return;
    const qty = parseInt(q);
    const cost = parseFloat(c);
    if (isNaN(qty) || qty <= 0 || isNaN(cost) || cost <= 0) { alert('Invalid quantity or cost.'); return; }
    try {
      const res = await addBatch({ variables: { input: { partId, quantity: qty, unitCost: cost } } });
      if (res.data?.addPartBatch) refetch();
    } catch { }
  };

  const handleDeleteBatch = async (id: string) => {
    try {
      await deleteBatch({ variables: { id } });
      refetch();
    } catch { }
  };

  return (
    <>
      <Card title="Parts & Inventory" action={<Button onClick={openAdd}>+ Add Part</Button>}>
        {parts.length === 0 ? (
          <p className="text-sm text-gray-400">No parts added yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead><tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Name</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Location</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Batches</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Actions</th>
            </tr></thead>
            <tbody>
              {parts.map((p) => {
                const totalQty = p.batches.reduce((s, b) => s + b.quantity, 0);
                return (
                  <tr key={p.id}>
                    <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{p.name}</td>
                    <td className="px-4 py-3.5 text-sm border-b border-border text-muted">{locations.find((l) => l.id === p.locationId)?.name || '—'}</td>
                    <td className="px-4 py-3.5 text-sm border-b border-border">
                      {p.batches.length === 0 ? <span className="text-muted">No batches</span> : (
                        <div className="flex flex-col gap-0.5">
                          {p.batches.map((b) => (
                            <div key={b.id} className="flex items-center gap-2">
                              <span className="text-primary">{b.quantity}x</span>
                              <span className="text-muted">@ ${b.unitCost.toFixed(2)}</span>
                              {!p.batches || p.batches.length > 0 ? (
                                <button onClick={() => handleDeleteBatch(b.id)} className="text-red-400 hover:text-red-600 text-xs cursor-pointer">&times;</button>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}
                      <button onClick={() => handleAddBatch(p.id)} className="text-accent hover:underline text-xs font-semibold mt-1 cursor-pointer">+ Batch</button>
                    </td>
                    <td className="px-4 py-3.5 text-sm border-b border-border text-right">
                      <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:underline text-xs font-semibold cursor-pointer">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Part" size="m">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
          <ErrorBanner message={error} />
          <Field label="Part Name" required>
            <div ref={inputRef}>
              <input type="text" value={searchText}
                onChange={(e) => { setSearchText(e.target.value); setSelectedPartId(''); setShowDropdown(true); }}
                onFocus={() => { updateDropPos(); setShowDropdown(true); }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                placeholder="Type to search parts..."
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            {showDropdown && filteredPartNames.length > 0 && (
              <div style={{ position: 'fixed', top: dropPos.top, left: dropPos.left, width: dropPos.width, zIndex: 9999 }}
                className="rounded border border-gray-200 bg-white shadow-lg max-h-60 overflow-y-auto">
                {filteredPartNames.map((p) => (
                  <button key={p.id} type="button" onMouseDown={() => handleSelectPart(p.id)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer">
                    {p.name} {p.category ? <span className="text-muted">({p.category})</span> : null}
                  </button>
                ))}
              </div>
            )}
            {showDropdown && searchText && filteredPartNames.length === 0 && (
              <div style={{ position: 'fixed', top: dropPos.top, left: dropPos.left, width: dropPos.width, zIndex: 9999 }}
                className="rounded border border-gray-200 bg-white shadow-lg p-3 text-sm text-muted">
                No parts match "{searchText}"
              </div>
            )}
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Brand (optional)">
              <select value={selectedMake} onChange={(e) => { setSelectedMake(e.target.value); setSelectedModel(''); }}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="">Any Brand</option>
                {makes.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </Field>
            <Field label="Model (optional)">
              <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}
                disabled={!selectedMake}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none disabled:opacity-50">
                <option value="">Any Model</option>
                {models.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Year (optional)">
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="">Any Year</option>
                {years.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </Field>
            <Field label="Location (optional)">
              <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="">No Location</option>
                {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>
            </Field>
          </div>
          <FormActions onCancel={() => setModalOpen(false)} submitting={submitting} submitLabel="Add Part" />
        </form>
      </Modal>
    </>
  );
}

function ToolsSettings() {
  const { data, refetch } = useShopToolsQuery();
  const [createTool] = useCreateShopToolMutation();
  const [updateTool] = useUpdateShopToolMutation();
  const [deleteTool] = useDeleteShopToolMutation();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [qty, setQty] = useState('');
  const [status, setStatus] = useState('available');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const tools = data?.shopTools?.items ?? [];

  const openAdd = () => {
    setEditingId(null); setName(''); setDesc(''); setQty(''); setStatus('available'); setError(''); setModalOpen(true);
  };

  const openEdit = (t: typeof tools[0]) => {
    setEditingId(t.id); setName(t.name); setDesc(t.description ?? ''); setQty(t.quantity.toString()); setStatus(t.status); setError(''); setModalOpen(true);
  };

  const handleSubmit = async () => {
    setError('');
    if (!name.trim()) { setError('Name is required.'); return; }
    setSubmitting(true);
    const tid = typeof window !== 'undefined' ? localStorage.getItem('selectedTenantId') || '' : '';
    if (!tid) { setError('No tenant selected.'); setSubmitting(false); return; }

    try {
      if (editingId) {
        const input: UpdateShopToolInput = { name: name || null, description: desc || null, quantity: qty ? parseInt(qty) : null, status: status || null };
        const res = await updateTool({ variables: { id: editingId, input } });
        if (!res.data?.updateShopTool) { setError(res.errors?.[0]?.message || 'Failed to update tool'); return; }
      } else {
        const input: CreateShopToolInput = { tenantId: tid as any, name, description: desc || null, quantity: qty ? parseInt(qty) : null, status: status || null };
        const res = await createTool({ variables: { input } });
        if (!res.data?.createShopTool) { setError(res.errors?.[0]?.message || 'Failed to create tool'); return; }
      }
      setModalOpen(false); refetch();
    } catch (err: any) { setError(err.message || 'An error occurred'); }
    finally { setSubmitting(false); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteTool({ variables: { id } });
      if (res.data?.deleteShopTool) refetch();
    } catch { }
  };

  const statusColors: Record<string, string> = { available: 'text-green-600', in_use: 'text-yellow-600', maintenance: 'text-orange-500', retired: 'text-gray-400' };

  return (
    <>
      <Card title="Shop Tools" action={<Button onClick={openAdd}>+ Add Tool</Button>}>
        {tools.length === 0 ? (
          <p className="text-sm text-gray-400">No tools added yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead><tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Name</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Qty</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Status</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted uppercase tracking-wider border-b border-border">Actions</th>
            </tr></thead>
            <tbody>
              {tools.map((t) => (
                <tr key={t.id}>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{t.name}</td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary">{t.quantity}</td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-primary"><span className={statusColors[t.status] ?? ''}>{t.status.replace('_', ' ')}</span></td>
                  <td className="px-4 py-3.5 text-sm border-b border-border text-right flex gap-2 justify-end">
                    <button onClick={() => openEdit(t)} className="text-accent hover:underline text-xs font-semibold cursor-pointer">Edit</button>
                    <button onClick={() => handleDelete(t.id)} className="text-red-500 hover:underline text-xs font-semibold cursor-pointer">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editingId ? 'Edit Tool' : 'Add Tool'} size="s">
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
          <ErrorBanner message={error} />
          <Field label="Name" required>
            <Field.Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Impact Wrench" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field label="Quantity">
              <Field.Input type="number" value={qty} onChange={(e) => setQty(e.target.value)} placeholder="1" />
            </Field>
            <Field label="Status">
              <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none">
                <option value="available">Available</option>
                <option value="in_use">In Use</option>
                <option value="maintenance">Maintenance</option>
                <option value="retired">Retired</option>
              </select>
            </Field>
          </div>
          <Field label="Description">
            <Field.Textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={2} placeholder="Optional description" />
          </Field>
          <FormActions onCancel={() => setModalOpen(false)} submitting={submitting} submitLabel={editingId ? 'Update Tool' : 'Add Tool'} />
        </form>
      </Modal>
    </>
  );
}
