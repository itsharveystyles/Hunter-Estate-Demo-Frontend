import {
  FileDown,
} from 'lucide-react'
import { Badge } from '../../ui/Badge.jsx'
import { Button } from '../../ui/Button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/Card.jsx'
import { useOutletContext } from 'react-router-dom'

function Stat({ label, value, hint, accent = 'green' }) {
  const variant =
    accent === 'green'
      ? 'green'
      : accent === 'blue'
        ? 'blue'
        : accent === 'amber'
          ? 'amber'
          : 'neutral'

  return (
    <div className="rounded-lg border border-[#1f3b63] bg-white px-4 py-3">
      <div className="text-xs font-bold text-slate-600">{label}</div>
      <div className="mt-1 text-2xl font-black tracking-tight text-slate-900">
        {value}
      </div>
      <div className="mt-0.5 text-xs font-semibold text-slate-500">
        <Badge variant={variant} className="px-2 py-0.5">
          {hint}
        </Badge>
      </div>
    </div>
  )
}

export function AdminDashboard() {
  const { title } = useOutletContext()
  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-xl font-black tracking-tight text-slate-900">
        {title}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total Users" value="0" hint="No users yet" accent="blue" />
        <Stat label="Active Sessions" value="0" hint="No active sessions" accent="green" />
        <Stat label="Total Records" value="0" hint="No CRM data yet" accent="amber" />
        <Stat label="System Health" value="Setup" hint="Initial configuration" accent="green" />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card className="shadow-none">
          <CardHeader className="items-center border-b border-[#c7d3e6]">
            <CardTitle>Recent User Activity</CardTitle>
            <Button variant="ghost" size="sm">
              <FileDown className="h-4 w-4" />
              Export
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No recent activity.</div>
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="items-center border-b border-[#c7d3e6]">
            <CardTitle>Pending Admin Tasks</CardTitle>
            <Badge variant="neutral">0</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <div className="px-3 py-6 text-sm text-slate-500">No pending tasks.</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

