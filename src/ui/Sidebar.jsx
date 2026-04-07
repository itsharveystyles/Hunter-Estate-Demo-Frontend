import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

const NAV = [
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
      { to: '/admin/reports', label: 'Reports Export' },
    ],
  },
  {
    label: 'System',
    items: [
      { to: '/admin/audit', label: 'Audit Logs' },
      { to: '/admin/settings', label: 'Settings' },
    ],
  },
]

function Dot({ active }) {
  return (
    <span
      className={clsx(
        'h-2.5 w-2.5 rounded-full',
        active ? 'bg-rose-600' : 'bg-sand-200',
      )}
    />
  )
}

function NavItem({ to, label }) {
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

export function Sidebar() {
  return (
    <aside className="w-[230px] shrink-0 border-r border-sand-200 bg-sand-50 p-4">
      <div className="space-y-5">
        {NAV.map((section) => (
          <div key={section.label}>
            <div className="px-2 pb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">
              {section.label}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

