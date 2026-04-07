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
}

export function DashboardLayout() {
  const { pathname } = useLocation()
  const title = PAGE_TITLES[pathname] ?? 'Dashboard'

  return (
    <div className="min-h-screen bg-sand-50 text-slate-900">
      <div className="min-h-screen w-full">
        <div className="min-h-screen overflow-hidden bg-sand-50">
          <HeaderBar />
          <div className="flex min-h-[calc(100vh-56px)]">
            <Sidebar />
            <div className="min-w-0 flex-1 p-6">
              <main className="min-w-0">
                <Outlet context={{ title }} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

