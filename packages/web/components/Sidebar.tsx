'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Squares2X2Icon,
  ShoppingBagIcon,
  ArchiveBoxIcon,
  BuildingOfficeIcon,
  ClipboardDocumentListIcon,
  CalendarDaysIcon,
  UsersIcon,
  TruckIcon,
  CurrencyDollarIcon,
  WrenchIcon,
  Cog6ToothIcon,
  ChevronDownIcon,
  BuildingStorefrontIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

interface TenantInfo {
  id: string;
  name: string;
  app_id: string;
}

const storeNav = [
  { href: '/store', label: 'Dashboard', icon: Squares2X2Icon },
  { href: '/store/products', label: 'Products', icon: ShoppingBagIcon },
  { href: '/store/inventory', label: 'Inventory', icon: ArchiveBoxIcon },
  { href: '/store/suppliers', label: 'Suppliers', icon: BuildingOfficeIcon },
  { href: '/store/purchase-orders', label: 'Purchase Orders', icon: ClipboardDocumentListIcon },
];

const repairNav = [
  { href: '/repair', label: 'Dashboard', icon: Squares2X2Icon },
  { href: '/repair/appointments', label: 'Appointments', icon: CalendarDaysIcon },
  { href: '/repair/customers', label: 'Customers', icon: UsersIcon },
  { href: '/repair/vehicles', label: 'Vehicles', icon: TruckIcon },
  { href: '/repair/invoices', label: 'Invoices', icon: CurrencyDollarIcon },
  { href: '/repair/mechanics', label: 'Mechanics', icon: WrenchIcon },
];

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: Squares2X2Icon },
  { href: '/admin/users', label: 'Users', icon: UsersIcon },
  { href: '/admin/branches', label: 'Branches', icon: BuildingOfficeIcon },
  { href: '/admin/settings', label: 'Settings', icon: Cog6ToothIcon },
];

const automobileNav = [
  { href: '/automobile', label: 'Dashboard', icon: Squares2X2Icon },
  { href: '/automobile/vehicles', label: 'Vehicles', icon: TruckIcon },
  { href: '/automobile/drivers', label: 'Drivers', icon: UsersIcon },
  { href: '/automobile/settings', label: 'Settings', icon: Cog6ToothIcon },
];

const APP_STORE  = '00000000-0000-0000-0000-202605270001';
const APP_REPAIR = '00000000-0000-0000-0000-202605270002';
const APP_MOBILE = '00000000-0000-0000-0000-202605270003';
const APP_ADMIN       = '00000000-0000-0000-0000-202605270004';
const APP_AUTOMOBILE  = '00000000-0000-0000-0000-202605270005';

const appMap: Record<string, { name: string; route: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }> = {
  [APP_STORE]:  { name: 'Store',  route: '/store',  Icon: BuildingStorefrontIcon },
  [APP_REPAIR]: { name: 'Repair', route: '/repair', Icon: WrenchIcon },
  [APP_MOBILE]: { name: 'Mobile', route: '/mobile', Icon: Squares2X2Icon },
  [APP_ADMIN]:      { name: 'Admin',      route: '/admin',      Icon: Cog6ToothIcon },
  [APP_AUTOMOBILE]: { name: 'Automobile', route: '/automobile', Icon: TruckIcon },
};

function parseToken<T>(key: string): T | null {
  if (typeof window === 'undefined') return null;
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    return JSON.parse(atob(token.split('.')[1]))[key] as T;
  } catch {
    return null;
  }
}

function useTenants(): TenantInfo[] {
  return parseToken<TenantInfo[]>('tenants') || [];
}

function useRole(): string {
  return parseToken<string>('role') || '';
}

function getUserInitials(): string {
  const email = parseToken<string>('email') || '';
  return email.charAt(0).toUpperCase();
}

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [tenants, setTenants] = useState<TenantInfo[]>([]);
  const [role, setRole] = useState('');
  const [userInitial, setUserInitial] = useState('');
  const [selectedTenantId, setSelectedTenantId] = useState<string>('');

  useEffect(() => {
    setTenants(useTenants());
    setRole(useRole());
    setUserInitial(getUserInitials());
    setSelectedTenantId(localStorage.getItem('selectedTenantId') || '');
  }, []);

  const [tenantDropdownOpen, setTenantDropdownOpen] = useState(false);
  const tenantDropdownRef = useRef<HTMLDivElement>(null);

  const currentAppSlug = pathname.startsWith('/admin') ? 'admin' : pathname.startsWith('/repair') ? 'repair' : pathname.startsWith('/mobile') ? 'mobile' : pathname.startsWith('/automobile') ? 'automobile' : 'store';
  const isAdmin      = currentAppSlug === 'admin';
  const isRepair     = currentAppSlug === 'repair';
  const isAutomobile = currentAppSlug === 'automobile';
  const isSuperAdmin = role === 'superAdmin';
  const navItems = isAdmin ? adminNav : isAutomobile ? automobileNav : isRepair ? repairNav : storeNav;

  const currentTenants = tenants.filter(t => {
    const a = appMap[t.app_id];
    return a && a.route === '/' + currentAppSlug;
  });
  const activeTenant = currentTenants.find(t => t.id === selectedTenantId) || currentTenants[0] || null;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tenantDropdownRef.current && !tenantDropdownRef.current.contains(e.target as Node)) {
        setTenantDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectTenantAndNavigate = (tenant: TenantInfo) => {
    setSelectedTenantId(tenant.id);
    localStorage.setItem('selectedTenantId', tenant.id);
    setTenantDropdownOpen(false);
    const a = appMap[tenant.app_id];
    if (a) router.push(a.route);
  };

  const groupedTenants = tenants.reduce<Record<string, TenantInfo[]>>((acc, t) => {
    const a = appMap[t.app_id];
    if (a) {
      if (!acc[a.name]) acc[a.name] = [];
      acc[a.name].push(t);
    }
    return acc;
  }, {});

  const linkClass = (href: string) =>
    `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition no-underline ${
      pathname === href ? 'bg-accent/12 text-accent' : 'text-white/60 hover:bg-sidebar-hover hover:text-white/90'
    }`;

  return (
    <aside className="w-[260px] bg-sidebar text-white flex flex-col fixed top-0 left-0 bottom-0 z-50">
      <div className="p-5 border-b border-white/10">
        <div className="relative">
          <div className="flex items-center gap-2.5 p-2.5 -mx-2.5 rounded-xl cursor-pointer hover:bg-sidebar-hover transition" onClick={() => setTenantDropdownOpen(!tenantDropdownOpen)}>
            <div className="w-9 h-9 rounded-xl bg-white text-sidebar flex items-center justify-center shrink-0 text-xs font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>{userInitial}</div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-sm font-semibold text-white leading-tight truncate">{activeTenant?.name || 'Select Tenant'}</span>
              <span className="text-[11px] text-white/40 truncate">{activeTenant ? (currentAppSlug.charAt(0).toUpperCase() + currentAppSlug.slice(1)) : ''}</span>
            </div>
            {tenants.length > 0 && <ChevronDownIcon className={`w-4 h-4 text-white/40 transition shrink-0 ${tenantDropdownOpen ? 'rotate-180' : ''}`} />}
          </div>
          {tenantDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-[#1f2937] border border-white/10 rounded-xl p-1.5 z-50 shadow-lg" ref={tenantDropdownRef}>
              {Object.entries(groupedTenants).map(([group, ts]) => (
                <div key={group}>
                  <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider px-3 py-1.5">{group}</div>
                  {ts.map(t => (
                    <button
                      key={t.id}
                      className={`flex items-center justify-between w-full px-3 py-2 rounded-lg cursor-pointer text-left hover:bg-white/5 transition ${
                        t.id === selectedTenantId ? 'bg-accent/10' : ''
                      }`}
                      onClick={() => selectTenantAndNavigate(t)}
                    >
                      <span className="text-xs font-semibold text-white">{t.name}</span>
                      {t.id === selectedTenantId && <span className="text-accent text-sm font-bold shrink-0">✓</span>}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-3 flex flex-col gap-0.5">
        {isSuperAdmin && (
          <>
            <div className="text-[11px] font-semibold text-white/40 uppercase tracking-wider px-3 py-1.5">Admin</div>
            {adminNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  <span className="w-5 h-5 flex items-center justify-center"><Icon className="w-5 h-5 stroke-[1.8]" /></span>
                  {item.label}
                </Link>
              );
            })}
            <div className="border-t border-white/10 my-2" />
          </>
        )}
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              <span className="w-5 h-5 flex items-center justify-center"><Icon className="w-5 h-5 stroke-[1.8]" /></span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <nav className="border-t border-white/10 pt-2 p-3 flex flex-col gap-0.5">
        <Link href={`/${currentAppSlug}/settings`} className={linkClass(`/${currentAppSlug}/settings`)}>
          <span className="w-5 h-5 flex items-center justify-center"><Cog6ToothIcon className="w-5 h-5 stroke-[1.8]" /></span>
          Settings
        </Link>
      </nav>

      <div className="px-3 pb-3">
        <button onClick={() => { localStorage.removeItem('token'); document.cookie = 'token=; path=/; max-age=0'; router.push('/login'); }} className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:bg-sidebar-hover hover:text-white/90 transition no-underline cursor-pointer">
          <span className="w-5 h-5 flex items-center justify-center"><ArrowRightOnRectangleIcon className="w-5 h-5 stroke-[1.8]" /></span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
