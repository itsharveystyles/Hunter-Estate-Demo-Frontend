import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { DashboardLayout } from './layouts/DashboardLayout.jsx'
import { AdminDashboard } from './pages/admin/AdminDashboard.jsx'
import { PlaceholderPage } from './pages/PlaceholderPage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/admin/overview" replace />} />

        <Route element={<DashboardLayout />}>
          <Route path="/admin/overview" element={<AdminDashboard />} />
          <Route
            path="/admin/users"
            element={<PlaceholderPage title="User Management" />}
          />
          <Route
            path="/admin/roles"
            element={<PlaceholderPage title="Roles & Permissions" />}
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
        </Route>

        <Route path="*" element={<Navigate to="/admin/overview" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
