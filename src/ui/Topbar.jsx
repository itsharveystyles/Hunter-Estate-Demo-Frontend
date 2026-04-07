import { Bell, Search, Sparkles } from 'lucide-react'
import { Badge } from './Badge.jsx'
import { Button } from './Button.jsx'

export function Topbar({ title }) {
  return (
    <header className="rounded-xl border border-sand-200 bg-white shadow-card">
      <div className="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="truncate text-lg font-black tracking-tight text-slate-900">
              {title}
            </h1>
            <Badge variant="ink" className="hidden sm:inline-flex">
              Admin
            </Badge>
          </div>
          <p className="mt-0.5 text-sm text-slate-600">
            Good morning, Alex. Here’s what needs your attention today.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-[320px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search users, clients, listings…"
              className="h-10 w-full rounded-lg border border-sand-200 bg-sand-50 pl-9 pr-3 text-sm font-semibold text-slate-900 placeholder:text-slate-500 outline-none ring-0 transition focus:border-slate-300 focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="h-10 w-10 px-0" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="primary">
              <Sparkles className="h-4 w-4" />
              Quick actions
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

