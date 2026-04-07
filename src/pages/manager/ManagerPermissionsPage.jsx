import { useOutletContext } from 'react-router-dom'
import { Badge } from '../../ui/Badge.jsx'

const MANAGER_PERMISSIONS = [
  {
    module: 'Leads',
    note: 'All leads in their department',
    access: 'Full Access',
    variant: 'green',
    details:
      'View all leads across the entire department (not limited to their own). Can reassign any lead to a different Sales Rep. Can update lead status. Can add notes and flag priority leads.',
  },
  {
    module: 'Clients',
    note: 'All active client profiles',
    access: 'Full Access',
    variant: 'green',
    details:
      "View and edit any client record in the department. Can reassign clients between Sales Reps. Can escalate a client to a senior tier. Cannot delete client records (Admin only).",
  },
  {
    module: 'Deal Pipeline',
    note: 'Company-wide deal view',
    access: 'Full Access',
    variant: 'green',
    details:
      'View all deals in the pipeline across all agents. Can move deals between stages manually (e.g. to unblock a deal). Can add internal notes to any deal. Receives alerts for stalled or idle deals.',
  },
  {
    module: 'Property Listings',
    note: 'Active and pending listings',
    access: 'Full Access',
    variant: 'green',
    details:
      'View, create, and edit property listings. Can approve a listing before it goes live. Can change listing status (Active, Under Offer, Sold). Cannot permanently delete listings.',
  },
  {
    module: 'Reports & Analytics',
    note: 'Department-level reporting',
    access: 'View + Export',
    variant: 'blue',
    details:
      'Access and export department-level reports: conversion rates, revenue by agent, lead sources, pipeline velocity. Cannot see system-level data (server logs, user sessions, auth data).',
  },
  {
    module: 'Team Performance',
    note: 'Agent stats and activity',
    access: 'Full Access',
    variant: 'green',
    details:
      "View individual Sales Rep performance dashboards: leads handled, conversion rate, deals closed, activity log. Can leave internal review notes on an agent's profile.",
  },
  {
    module: 'User Management',
    note: 'Team account management',
    access: 'Limited',
    variant: 'amber',
    details:
      'Can view user profiles and activity for members of their team. Cannot create, delete or change roles. Cannot see Admin-level users. Can submit a request to Admin to add/remove a user.',
  },
  {
    module: 'System Settings',
    note: 'Config and integrations',
    access: 'No Access',
    variant: 'neutral',
    details:
      'Managers have no access to system configuration, API keys, integrations, or database settings. All technical changes must go through the Admin.',
  },
  {
    module: 'Audit Logs',
    note: 'System activity trail',
    access: 'No Access',
    variant: 'neutral',
    details:
      'Managers cannot access the audit log. This is reserved exclusively for Admins to ensure accountability and prevent tampering.',
  },
]

export function ManagerPermissionsPage() {
  const { title } = useOutletContext()

  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 border-b border-[#c7d3e6] pb-3">
        <h2 className="text-xl font-black tracking-tight text-slate-900">{title}</h2>
        <p className="mt-1 text-sm text-slate-600">
          Authority scope and boundaries for manager role.
        </p>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#1f3b63] bg-white">
        <div className="grid grid-cols-12 border-b border-[#c7d3e6] bg-[#f1f5fb] px-4 py-3 text-xs font-black uppercase tracking-wider text-slate-600">
          <div className="col-span-2">Module</div>
          <div className="col-span-2">Access Level</div>
          <div className="col-span-8">What the Manager Can Do</div>
        </div>

        {MANAGER_PERMISSIONS.map((row) => (
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

