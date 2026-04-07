import { useOutletContext } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card.jsx'

function Metric({ label, value, hint, trend }) {
  return (
    <div className="rounded-lg border border-[#1f3b63] bg-white px-4 py-3">
      <div className="text-xs font-bold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-black text-slate-900">{value}</div>
      <div className="mt-0.5 flex items-center gap-1 text-xs text-slate-500">
        {trend ? <span className="font-semibold text-emerald-700">{trend}</span> : null}
        <span>{hint}</span>
      </div>
    </div>
  )
}

export function ManagerDashboard() {
  const { title } = useOutletContext() // kept for route consistency

  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-[32px] font-black tracking-tight text-slate-900">
        Department Overview
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="Team Leads" value="0" hint="No leads yet" />
        <Metric label="Revenue MTD" value="$0" hint="No revenue yet" />
        <Metric label="Deals Closing" value="0" hint="No closed deals" />
        <Metric label="Team Members" value="0" hint="No team members yet" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Agent Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No performance data yet.</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Deals Needing Attention</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No deals require attention.</div>
          </CardContent>
        </Card>
      </div>

      <div className="hidden">{title}</div>
    </div>
  )
}

