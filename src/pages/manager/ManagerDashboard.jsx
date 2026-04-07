import { useOutletContext } from 'react-router-dom'
import { Badge } from '../../ui/Badge.jsx'
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

function LeaderRow({ name, deal }) {
  return (
    <div className="flex items-center justify-between border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="text-sm font-semibold text-slate-900">{name}</div>
      <Badge variant="green">{deal}</Badge>
    </div>
  )
}

function AttentionRow({ name, stage, status, variant = 'amber' }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="text-sm text-slate-900">
        <span className="font-semibold">{name}</span>
        <span className="text-slate-700"> — {stage}</span>
      </div>
      <Badge variant={variant}>{status}</Badge>
    </div>
  )
}

export function ManagerDashboard() {
  const { title } = useOutletContext() // kept for route consistency

  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-[32px] font-black tracking-tight text-slate-900">
        Department Overview — <span className="font-medium">Good morning, Janet</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="Team Leads" value="34" hint="this week" trend="+8" />
        <Metric label="Revenue MTD" value="$148K" hint="" trend="↑ 12%" />
        <Metric label="Deals Closing" value="5" hint="this month" />
        <Metric label="Team Members" value="3" hint="Sales Reps" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Agent Leaderboard</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <LeaderRow name="Rachel S." deal="4 closed · $55K" />
            <LeaderRow name="Dan T." deal="3 closed · $41K" />
            <LeaderRow name="Mike V." deal="2 closed · $29K" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Deals Needing Attention</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <AttentionRow
              name="Lisa Chen"
              stage="Negotiating"
              status="Stalled"
              variant="red"
            />
            <AttentionRow
              name="Amir Patel"
              stage="Qualified"
              status="Follow up"
              variant="amber"
            />
            <AttentionRow
              name="Tom Nguyen"
              stage="Contacted"
              status="3 days idle"
              variant="amber"
            />
          </CardContent>
        </Card>
      </div>

      <div className="hidden">{title}</div>
    </div>
  )
}

