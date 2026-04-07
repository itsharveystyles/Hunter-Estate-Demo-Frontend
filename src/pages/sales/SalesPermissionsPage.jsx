import { useOutletContext } from 'react-router-dom'
import { Badge } from '../../ui/Badge.jsx'

const SALES_PERMISSIONS = [
  {
    module: 'My Leads',
    note: 'Only leads assigned to them',
    access: 'Own Records',
    variant: 'amber',
    details:
      'View, update, and add notes to leads that are assigned to them only. Can add new leads manually (walk-ins, phone inquiries, referrals). Cannot view or access leads assigned to other Sales Reps. Cannot delete leads.',
  },
  {
    module: 'My Clients',
    note: 'Only their converted clients',
    access: 'Own Records',
    variant: 'amber',
    details:
      "View and update client profiles that belong to them. Add notes, update contact details, schedule follow-ups, and update client status. Cannot view other agents' clients. Cannot delete client profiles.",
  },
  {
    module: 'My Pipeline',
    note: 'Only their own deal stages',
    access: 'Own Records',
    variant: 'amber',
    details:
      'View and manage their personal pipeline. Move their own deals between stages (New -> Contacted -> Qualified -> Negotiating). Cannot move deals to "Closed" — this requires Manager approval. Cannot see other agents\' pipeline deals.',
  },
  {
    module: 'Property Listings',
    note: 'All active listings (read)',
    access: 'View Only',
    variant: 'blue',
    details:
      'Browse all active property listings to match them with buyer leads. Can tag a listing as "matching" to a specific client. Cannot create, edit, or change listing status — new listings must be submitted to a Manager for approval and publishing.',
  },
  {
    module: 'Notes & Follow-ups',
    note: 'Activity log on their records',
    access: 'Full on Own',
    variant: 'green',
    details:
      "Add, edit, and delete notes on any of their own leads, clients, or deals. Set follow-up reminders with date and time. These notes are visible to their Manager. Cannot add notes to records they don't own.",
  },
  {
    module: 'Reports & Analytics',
    note: 'Company or team data',
    access: 'No Access',
    variant: 'neutral',
    details:
      'Sales Reps do not have access to any reports module. They cannot see revenue figures, team performance data, or company-wide stats. Their own personal stats (leads, closes, follow-ups) are shown on their dashboard only.',
  },
  {
    module: 'Team & User Data',
    note: 'Other agents or managers',
    access: 'No Access',
    variant: 'neutral',
    details:
      "Sales Reps cannot see other users' data, profiles, or performance. They have no visibility into the team structure, agent list, or Manager-level information. This is entirely hidden from their view.",
  },
  {
    module: 'System Settings',
    note: 'Config, roles, integrations',
    access: 'No Access',
    variant: 'neutral',
    details:
      'No access to any system settings whatsoever. This section is not visible in their navigation. All account settings are limited to their own profile: name, photo, password, and notification preferences.',
  },
]

export function SalesPermissionsPage() {
  const { title } = useOutletContext()

  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 border-b border-[#c7d3e6] pb-3">
        <h2 className="text-xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">
          Permission boundaries and allowed actions for sales representatives.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#1f3b63] bg-white">
        <div className="grid grid-cols-12 border-b border-[#c7d3e6] bg-[#f1f5fb] px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-600">
          <div className="col-span-2">Module</div>
          <div className="col-span-2">Access Level</div>
          <div className="col-span-8">What the Sales Rep Can Do</div>
        </div>

        {SALES_PERMISSIONS.map((row) => (
          <div
            key={row.module}
            className="grid grid-cols-12 gap-3 border-b border-[#c7d3e6] px-4 py-3 last:border-b-0"
          >
            <div className="col-span-2">
              <div className="text-[15px] font-black leading-tight text-slate-900">
                {row.module}
              </div>
              <div className="mt-1 text-sm leading-tight text-slate-600">{row.note}</div>
            </div>

            <div className="col-span-2">
              <Badge variant={row.variant}>{row.access}</Badge>
            </div>

            <div className="col-span-8 text-sm leading-relaxed text-slate-700">
              {row.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

