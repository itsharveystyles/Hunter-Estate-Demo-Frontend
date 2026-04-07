import { useMemo, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Badge } from '../../ui/Badge.jsx'
import { Button } from '../../ui/Button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card.jsx'

const MODULE_PERMISSIONS = [
  {
    module: 'User Management',
    note: 'Create, edit, deactivate users',
    access: 'Full Control',
    accessVariant: 'green',
    details:
      'Create new user accounts. Assign or change roles (Admin, Manager, Sales Rep). Deactivate or delete users. Reset passwords. View login history and session data for all users.',
  },
  {
    module: 'Role & Permissions',
    note: 'Define what each role can see/do',
    access: 'Full Control',
    accessVariant: 'green',
    details:
      'Configure which pages, modules and actions each role has access to. Create custom permission sets. Restrict or unlock features per role or per user individually.',
  },
  {
    module: 'Leads',
    note: 'All leads across the company',
    access: 'Full Access',
    accessVariant: 'green',
    details:
      'View, edit, reassign, or delete any lead in the system regardless of which agent it belongs to. Can bulk import/export leads via CSV. Can merge duplicate lead records.',
  },
  {
    module: 'Clients',
    note: 'All client records',
    access: 'Full Access',
    accessVariant: 'green',
    details:
      'View and edit all client profiles across all departments and agents. Can anonymise or permanently delete client data for compliance (GDPR/data privacy).',
  },
  {
    module: 'Property Listings',
    note: 'All active and archived listings',
    access: 'Full Access',
    accessVariant: 'green',
    details:
      'Add, edit, archive, or remove any property listing. Can override listing status. Manage listing categories, tags, and property attributes at a system level.',
  },
  {
    module: 'Deal Pipeline',
    note: 'All deal stages company-wide',
    access: 'Full Access',
    accessVariant: 'green',
    details:
      'View and modify every deal in every stage. Can configure pipeline stages - add, rename, or remove stages globally. Can force-move deals between stages.',
  },
  {
    module: 'Reports & Analytics',
    note: 'Company-wide business data',
    access: 'Full Access',
    accessVariant: 'green',
    details:
      'Generate and export any report: revenue, lead conversion, agent performance, pipeline health, and activity logs. Can schedule automated report delivery via email.',
  },
  {
    module: 'Audit Logs',
    note: 'Who did what and when',
    access: 'Exclusive Access',
    accessVariant: 'blue',
    details:
      'Only Admins can view the full audit trail - a timestamped log of every action taken by every user. Includes logins, data changes, deletions, and exports. Cannot be altered or cleared by anyone.',
  },
  {
    module: 'System Settings',
    note: 'Config, integrations, branding',
    access: 'Exclusive Access',
    accessVariant: 'blue',
    details:
      'Manage CRM branding, email integration (SMTP), notification settings, API keys, third-party integrations (e.g. property portals), and database backup schedules.',
  },
]

const INITIAL_USERS = [
  { id: 1, name: 'Rachel S.', role: 'Sales Rep', status: 'Active' },
  { id: 2, name: 'Dan T.', role: 'Manager', status: 'Active' },
  { id: 3, name: 'Janet L.', role: 'Sales Rep', status: 'Suspended' },
]

export function AdminAuthoritiesPage() {
  const { title } = useOutletContext()
  const [users, setUsers] = useState(INITIAL_USERS)
  const [activity, setActivity] = useState([
    'Admin opened permission controls',
  ])

  function pushActivity(message) {
    setActivity((prev) => [message, ...prev].slice(0, 8))
  }

  function updateRole(userId, role) {
    setUsers((prev) =>
      prev.map((user) => (user.id === userId ? { ...user, role } : user)),
    )
    const user = users.find((item) => item.id === userId)
    if (user) {
      pushActivity(`Role changed: ${user.name} -> ${role}`)
    }
  }

  function toggleStatus(userId) {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' }
          : user,
      ),
    )
    const user = users.find((item) => item.id === userId)
    if (user) {
      const next = user.status === 'Active' ? 'Suspended' : 'Active'
      pushActivity(`User status updated: ${user.name} -> ${next}`)
    }
  }

  const activeUsers = useMemo(
    () => users.filter((user) => user.status === 'Active').length,
    [users],
  )

  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 border-b border-[#c7d3e6] pb-3">
        <h2 className="text-xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">
          Module permissions and authority scope for Admin.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#1f3b63] bg-white">
        <div className="grid grid-cols-12 border-b border-[#c7d3e6] bg-[#f1f5fb] px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-600">
          <div className="col-span-3">Module</div>
          <div className="col-span-2">Access Level</div>
          <div className="col-span-7">What the Admin Can Do</div>
        </div>

        {MODULE_PERMISSIONS.map((row) => (
          <div
            key={row.module}
            className="grid grid-cols-12 gap-3 border-b border-[#c7d3e6] px-4 py-3 last:border-b-0"
          >
            <div className="col-span-3">
              <div className="text-[15px] font-black leading-tight text-slate-900">
                {row.module}
              </div>
              <div className="mt-1 text-sm leading-tight text-slate-600">{row.note}</div>
            </div>

            <div className="col-span-2">
              <Badge variant={row.accessVariant}>{row.access}</Badge>
            </div>

            <div className="col-span-7 text-sm leading-relaxed text-slate-700">
              {row.details}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader className="border-b border-[#c7d3e6]">
            <div>
              <CardTitle>Admin Action Center</CardTitle>
              <p className="mt-1 text-sm text-slate-600">
                Execute real admin actions based on authority level.
              </p>
            </div>
            <Badge variant="blue">{activeUsers} active users</Badge>
          </CardHeader>
          <CardContent className="p-0">
            {users.map((user) => (
              <div
                key={user.id}
                className="grid grid-cols-12 items-center gap-3 border-b border-[#c7d3e6] px-4 py-3 last:border-b-0"
              >
                <div className="col-span-4">
                  <div className="font-bold text-slate-900">{user.name}</div>
                  <div className="text-xs text-slate-600">User profile access</div>
                </div>
                <div className="col-span-3">
                  <select
                    value={user.role}
                    onChange={(event) => updateRole(user.id, event.target.value)}
                    className="h-9 w-full rounded-md border border-[#1f3b63] bg-white px-2 text-sm text-slate-800 outline-none"
                  >
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Sales Rep</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <Badge variant={user.status === 'Active' ? 'green' : 'red'}>
                    {user.status}
                  </Badge>
                </div>
                <div className="col-span-3 flex items-center justify-end gap-2">
                  <Button
                    size="sm"
                    variant="subtle"
                    onClick={() => pushActivity(`Password reset sent to ${user.name}`)}
                  >
                    Reset Password
                  </Button>
                  <Button
                    size="sm"
                    variant="primary"
                    onClick={() => toggleStatus(user.id)}
                  >
                    {user.status === 'Active' ? 'Suspend' : 'Activate'}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>System Controls</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <Button
              className="w-full justify-start"
              onClick={() => pushActivity('Monthly report export initiated')}
            >
              Export Monthly Report
            </Button>
            <Button
              className="w-full justify-start"
              variant="subtle"
              onClick={() => pushActivity('Audit logs exported by Admin')}
            >
              Export Audit Logs
            </Button>
            <Button
              className="w-full justify-start"
              variant="subtle"
              onClick={() => pushActivity('Database backup started')}
            >
              Run Database Backup
            </Button>
            <Button
              className="w-full justify-start"
              variant="subtle"
              onClick={() => pushActivity('Leads module temporarily locked')}
            >
              Lock Leads Module
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-4">
        <CardHeader className="border-b border-[#c7d3e6]">
          <CardTitle>Recent Admin Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {activity.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="rounded-md border border-[#c7d3e6] bg-[#f8fbff] px-3 py-2 text-sm text-slate-700"
            >
              {item}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

