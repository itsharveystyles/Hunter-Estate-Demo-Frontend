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
    <div className="flex items-center justify-between bg-[#11110f] px-4 py-3 text-white">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-brand-500 text-sm font-black text-[#11110f]">
          H
        </div>
        <div className="leading-tight">
          <div className="text-sm font-extrabold tracking-wide">
            Hunter Estate
          </div>
          <div className="text-xs text-white/70">Activity by MIS</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="role-switch" className="text-xs font-semibold text-white/70">
          Preview role
        </label>
        <select
          id="role-switch"
          value={normalizedRole}
          onChange={(event) => handleRoleChange(event.target.value)}
          className="h-8 rounded-md border border-white/20 bg-white/10 px-2 text-xs font-semibold text-white outline-none"
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

