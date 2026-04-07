import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const NAV_ADMIN = [
  {
    label: 'Main',
    items: [
      { to: '/admin/overview', label: 'System Overview' },
      { to: '/admin/users', label: 'User Management' },
      { to: '/admin/roles', label: 'Role & Permissions' },
    ],
  },
  {
    label: 'CRM Data',
    items: [
      { to: '/admin/leads', label: 'All Leads' },
      { to: '/admin/clients', label: 'All Clients' },
      { to: '/admin/listings', label: 'All Listings' },
    ],
  },
  {
    label: 'System',
    items: [
      { to: '/admin/audit', label: 'Audit Logs' },
      { to: '/admin/reports', label: 'Reports Export' },
      { to: '/admin/settings', label: 'Settings' },
    ],
  },
]

const NAV_MANAGER = [
  {
    label: 'Main',
    items: [
      { to: '/manager/overview', label: 'Team Overview' },
      { to: '/manager/pipeline', label: 'Deal Pipeline' },
      { to: '/manager/team', label: 'Manager Permissions' },
    ],
  },
  {
    label: 'CRM Data',
    items: [
      { to: '/manager/leads', label: 'Leads (Dept.)' },
      { to: '/manager/clients', label: 'Clients (Dept.)' },
      { to: '/manager/listings', label: 'Listings (Dept.)' },
    ],
  },
  {
    label: 'System',
    items: [
      { to: '/manager/reports', label: 'Reports Export' },
      { to: '/manager/settings', label: 'Dept Settings' },
    ],
  },
]

const NAV_SALES = [
  {
    label: 'My Work',
    items: [
      { to: '/sales/overview', label: 'My Dashboard' },
      { to: '/sales/tasks', label: 'Sales Permissions' },
      { to: '/sales/leads', label: 'My Leads' },
      { to: '/sales/clients', label: 'My Clients' },
      { to: '/sales/pipeline', label: 'My Pipeline' },
    ],
  },
  {
    label: 'Properties',
    items: [{ to: '/sales/listings', label: 'Listings' }],
  },
  {
    label: 'No Access',
    items: [
      { label: 'Reports', disabled: true },
      { label: 'Team View', disabled: true },
      { label: 'Settings', disabled: true },
    ],
  },
]

function Dot({ active, disabled = false }) {
  return (
    <span
      className={clsx(
        'h-2.5 w-2.5 rounded-full',
        disabled ? 'bg-sand-300' : active ? 'bg-rose-600' : 'bg-sand-200',
      )}
    />
  )
}

function DisabledItem({ label }) {
  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-slate-400">
      <Dot disabled />
      <span className="truncate">{label}</span>
    </div>
  )
}

function NavItem({ to, label, disabled = false }) {
  if (disabled) {
    return <DisabledItem label={label} />
  }

  return (
    <NavLink
      to={to}
      className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-sand-100 hover:text-slate-900"
    >
      {({ isActive }) => (
        <div
          className={clsx(
            'flex w-full items-center gap-3',
            isActive ? 'text-rose-700' : 'text-slate-700',
          )}
        >
          <Dot active={isActive} />
          <span className="truncate">{label}</span>
        </div>
      )}
    </NavLink>
  )
}

export function Sidebar({ role = 'admin' }) {
  const nav = role === 'manager' ? NAV_MANAGER : role === 'sales' ? NAV_SALES : NAV_ADMIN

  return (
    <aside className="w-[230px] shrink-0 border-r border-[#1f3b63] bg-sand-50 p-4">
      <div className="space-y-5">
        {nav.map((section) => (
          <div key={section.label}>
            <div className="px-2 pb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">
              {section.label}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavItem key={item.to ?? item.label} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

