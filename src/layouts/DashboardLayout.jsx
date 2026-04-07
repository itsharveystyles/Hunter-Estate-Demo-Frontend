import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../ui/Sidebar.jsx'
import { HeaderBar } from '../ui/HeaderBar.jsx'

const PAGE_TITLES = {
  '/admin/overview': 'System Overview',
  '/admin/users': 'User Management',
  '/admin/roles': 'Roles & Permissions',
  '/admin/leads': 'All Leads',
  '/admin/clients': 'All Clients',
  '/admin/listings': 'All Listings',
  '/admin/reports': 'Reports & Analytics',
  '/admin/audit': 'Audit Logs',
  '/admin/settings': 'Settings',
  '/manager/overview': 'Manager Overview',
  '/manager/pipeline': 'Deal Pipeline',
  '/manager/team': 'Team Performance',
  '/manager/leads': 'Leads (Department)',
  '/manager/clients': 'Clients (Department)',
  '/manager/listings': 'Listings (Department)',
  '/manager/reports': 'Reports Export',
  '/manager/settings': 'Department Settings',
  '/sales/overview': 'Sales Overview',
  '/sales/tasks': 'My Tasks',
  '/sales/leads': 'My Leads',
  '/sales/clients': 'My Clients',
  '/sales/pipeline': 'My Pipeline',
  '/sales/listings': 'Listings',
  '/sales/reports': 'My Reports',
}

export function DashboardLayout() {
  const { pathname } = useLocation()
  const title = PAGE_TITLES[pathname] ?? 'Dashboard'
  const role = pathname.startsWith('/manager')
    ? 'manager'
    : pathname.startsWith('/sales')
      ? 'sales'
      : 'admin'

  return (
    <div className="min-h-screen bg-[#e9eef6] text-slate-900">
      <div className="min-h-screen w-full">
        <div className="min-h-screen overflow-hidden bg-[#e9eef6]">
          <HeaderBar role={role} />
          <div className="flex min-h-[calc(100vh-56px)]">
            <Sidebar role={role} />
            <div className="min-w-0 flex-1 p-6">
              <main className="min-w-0">
                <Outlet context={{ title, role }} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

