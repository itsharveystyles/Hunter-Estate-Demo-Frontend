import { Badge } from '../../ui/Badge.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card.jsx'

function Metric({ label, value, hint, hintColor = 'text-slate-600' }) {
  return (
    <div className="rounded-lg border border-[#1f3b63] bg-white px-4 py-3">
      <div className="text-xs font-bold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-black text-slate-900">{value}</div>
      <div className={`mt-0.5 text-xs font-semibold ${hintColor}`}>{hint}</div>
    </div>
  )
}

function LeadRow({ name, status, variant }) {
  return (
    <div className="flex items-center justify-between border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="text-sm font-semibold text-slate-900">{name}</div>
      <Badge variant={variant}>{status}</Badge>
    </div>
  )
}

function FollowUpRow({ name, task, time }) {
  return (
    <div className="flex items-center justify-between border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="text-sm text-slate-900">
        <span className="font-semibold">{name}</span>
        <span className="text-slate-700"> — {task}</span>
      </div>
      <div className="text-sm font-semibold text-slate-500">{time}</div>
    </div>
  )
}

export function SalesDashboard() {
  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-[32px] font-black tracking-tight text-slate-900">
        My Dashboard — <span className="font-medium">Good morning, Dan</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="My Leads" value="12" hint="5 active" />
        <Metric label="My Clients" value="8" hint="2 closing soon" />
        <Metric
          label="Deals Closed"
          value="3"
          hint="this month"
          hintColor="text-emerald-700"
        />
        <Metric label="Follow-ups" value="4" hint="due today" hintColor="text-rose-700" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>My Leads — Today</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <LeadRow name="Sandra Reed" status="New" variant="green" />
            <LeadRow name="Amir Patel" status="Qualified" variant="amber" />
            <LeadRow name="Fiona Walsh" status="Closed" variant="blue" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Today's Follow-ups</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <FollowUpRow name="Tom N." task="Property tour" time="10:00am" />
            <FollowUpRow name="Yuki K." task="Offer review" time="2:00pm" />
            <FollowUpRow name="Carlos R." task="Call" time="4:30pm" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

