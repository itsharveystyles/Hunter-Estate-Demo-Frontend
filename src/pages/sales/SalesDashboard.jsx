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

export function SalesDashboard() {
  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-[32px] font-black tracking-tight text-slate-900">
        My Dashboard
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Metric label="My Leads" value="0" hint="No assigned leads" />
        <Metric label="My Clients" value="0" hint="No active clients" />
        <Metric label="Deals Closed" value="0" hint="No closed deals" hintColor="text-slate-600" />
        <Metric label="Follow-ups" value="0" hint="No follow-ups today" hintColor="text-slate-600" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>My Leads — Today</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No leads yet.</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="border-b border-[#c7d3e6]">
            <CardTitle>Today's Follow-ups</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No follow-ups scheduled.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

