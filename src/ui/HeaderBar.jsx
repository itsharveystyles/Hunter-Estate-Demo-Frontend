export function HeaderBar() {
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

      <div className="rounded-full bg-rose-900/40 px-3 py-1 text-xs font-semibold text-rose-50">
        Admin
      </div>
    </div>
  )
}

