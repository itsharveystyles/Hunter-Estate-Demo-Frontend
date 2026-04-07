import { useLocation, useNavigate } from 'react-router-dom'

const ROLE_TO_PATH = {
  admin: '/admin/overview',
  manager: '/manager/overview',
  sales: '/sales/overview',
}

export function HeaderBar({ role = 'admin' }) {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const normalizedRole = pathname.startsWith('/manager')
    ? 'manager'
    : pathname.startsWith('/sales')
      ? 'sales'
      : role

  function handleRoleChange(nextRole) {
    navigate(ROLE_TO_PATH[nextRole] ?? ROLE_TO_PATH.admin)
  }

  return (
    <div className="flex items-center justify-between border-b border-[#1f3b63]/30 bg-gradient-to-r from-[#e8f1ff] via-[#dbe9ff] to-[#f0f6ff] px-4 py-3 text-slate-900 backdrop-blur-md">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-[#163a70] text-sm font-black text-white shadow-sm">
          H
        </div>
        <div className="leading-tight">
          <div className="text-sm font-extrabold tracking-wide">
            Hunter Estate
          </div>
          <div className="text-xs text-slate-600">Activity by MIS</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="role-switch" className="text-xs font-semibold text-slate-600">
          Preview role
        </label>
        <select
          id="role-switch"
          value={normalizedRole}
          onChange={(event) => handleRoleChange(event.target.value)}
          className="h-8 rounded-md border border-[#1f3b63]/40 bg-white/80 px-2 text-xs font-semibold text-slate-800 outline-none"
        >
          <option value="admin" className="text-slate-900">
            Admin
          </option>
          <option value="manager" className="text-slate-900">
            Manager
          </option>
          <option value="sales" className="text-slate-900">
            Sales Rep
          </option>
        </select>
      </div>
    </div>
  )
}

