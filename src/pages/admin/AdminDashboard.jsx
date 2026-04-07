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

function Row({ name, action, time }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="min-w-0">
        <div className="truncate text-sm font-bold text-slate-900">
          {name} <span className="font-normal text-slate-700">— {action}</span>
        </div>
      </div>
      <div className="shrink-0 text-xs font-semibold text-slate-500">{time}</div>
    </div>
  )
}

function Task({ title, note, badge, badgeVariant, actionLabel }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-[#c7d3e6] px-3 py-2 last:border-b-0">
      <div className="min-w-0">
        <div className="truncate text-sm font-bold text-slate-900">{title}</div>
        <div className="truncate text-xs text-slate-600">{note}</div>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Badge variant={badgeVariant}>{badge}</Badge>
        <Button size="sm" className="h-8">
          {actionLabel}
        </Button>
      </div>
    </div>
  )
}

export function AdminDashboard() {
  const { title } = useOutletContext()
  return (
    <div className="rounded-xl bg-[#eef2f8] p-6">
      <div className="mb-4 text-xl font-black tracking-tight text-slate-900">
        {title} — <span className="font-medium">Good morning, Alex</span>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Total Users" value="14" hint="3 roles active" accent="blue" />
        <Stat label="Active Sessions" value="6" hint="Live now" accent="green" />
        <Stat label="Total Records" value="847" hint="leads + clients" accent="amber" />
        <Stat label="System Health" value="Good" hint="All modules up" accent="green" />
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
            <Row name="Rachel S." action="logged in" time="2m ago" />
            <Row name="Dan T." action="added lead" time="14m ago" />
            <Row name="Janet L." action="ran report" time="1h ago" />
            <Row name="Mike V." action="updated client" time="2h ago" />
          </CardContent>
        </Card>

        <Card className="shadow-none">
          <CardHeader className="items-center border-b border-[#c7d3e6]">
            <CardTitle>Pending Admin Tasks</CardTitle>
            <Badge variant="red">3</Badge>
          </CardHeader>
          <CardContent className="p-0">
            <Task
              title="Approve new user (Sales)"
              note="Create credentials + assign permissions"
              badge="Action"
              badgeVariant="red"
              actionLabel="Action"
            />
            <Task
              title="Review permission request"
              note="Manager requests access to Reports"
              badge="Review"
              badgeVariant="amber"
              actionLabel="Review"
            />
            <Task
              title="Export monthly report"
              note="Executive summary"
              badge="Scheduled"
              badgeVariant="blue"
              actionLabel="View"
            />
            <Task
              title="Backup database"
              note="Due today"
              badge="Due today"
              badgeVariant="amber"
              actionLabel="Run"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

