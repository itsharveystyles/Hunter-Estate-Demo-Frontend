import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout.jsx'
import { AdminDashboard } from './pages/admin/AdminDashboard.jsx'
import { AdminAuthoritiesPage } from './pages/admin/AdminAuthoritiesPage.jsx'
import { ManagerDashboard } from './pages/manager/ManagerDashboard.jsx'
import { ManagerPermissionsPage } from './pages/manager/ManagerPermissionsPage.jsx'
import { SalesDashboard } from './pages/sales/SalesDashboard.jsx'
import { SalesPermissionsPage } from './pages/sales/SalesPermissionsPage.jsx'
import { PlaceholderPage } from './pages/PlaceholderPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/overview" replace />} />

        <Route element={<DashboardLayout />}>
          {/* Admin */}
          <Route path="/admin/overview" element={<AdminDashboard />} />
          <Route
            path="/admin/users"
            element={<PlaceholderPage title="User Management" />}
          />
          <Route
            path="/admin/roles"
            element={<AdminAuthoritiesPage />}
          />
          <Route path="/admin/leads" element={<PlaceholderPage title="Leads" />} />
          <Route
            path="/admin/clients"
            element={<PlaceholderPage title="Clients" />}
          />
          <Route
            path="/admin/listings"
            element={<PlaceholderPage title="Property Listings" />}
          />
          <Route
            path="/admin/reports"
            element={<PlaceholderPage title="Reports & Analytics" />}
          />
          <Route
            path="/admin/audit"
            element={<PlaceholderPage title="Audit Logs" />}
          />
          <Route
            path="/admin/settings"
            element={<PlaceholderPage title="System Settings" />}
          />

          {/* Manager */}
          <Route path="/manager/overview" element={<ManagerDashboard />} />
          <Route
            path="/manager/pipeline"
            element={<PlaceholderPage title="Deal Pipeline" />}
          />
          <Route
            path="/manager/team"
            element={<ManagerPermissionsPage />}
          />
          <Route
            path="/manager/leads"
            element={<PlaceholderPage title="Leads (Department)" />}
          />
          <Route
            path="/manager/clients"
            element={<PlaceholderPage title="Clients (Department)" />}
          />
          <Route
            path="/manager/listings"
            element={<PlaceholderPage title="Listings (Department)" />}
          />
          <Route
            path="/manager/reports"
            element={<PlaceholderPage title="Reports Export" />}
          />
          <Route
            path="/manager/settings"
            element={<PlaceholderPage title="Department Settings" />}
          />

          {/* Sales */}
          <Route path="/sales/overview" element={<SalesDashboard />} />
          <Route path="/sales/tasks" element={<SalesPermissionsPage />} />
          <Route path="/sales/leads" element={<PlaceholderPage title="My Leads" />} />
          <Route
            path="/sales/clients"
            element={<PlaceholderPage title="My Clients" />}
          />
          <Route
            path="/sales/pipeline"
            element={<PlaceholderPage title="My Pipeline" />}
          />
          <Route
            path="/sales/listings"
            element={<PlaceholderPage title="Listings" />}
          />
          <Route
            path="/sales/reports"
            element={<PlaceholderPage title="My Reports" />}
          />
        </Route>

        <Route path="*" element={<Navigate to="/admin/overview" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
