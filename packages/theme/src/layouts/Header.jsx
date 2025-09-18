import { Monitor, Settings } from "lucide-react"

export default function Header() {
  return (
<header className="flex items-center justify-between h-20 px-6 bg-gray-200 text-black ">
      <div>
        <h1 className="text-lg font-bold text-[var(--color-text)] flex items-center gap-2">
          Dashboard
        </h1>
        <p className="text-sm text-[var(--color-text-muted)]">
          Main Shell Application
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <span className="px-3 py-1 text-sm rounded-full bg-[var(--color-bg-badge)] text-[var(--color-text-badge)]">
          Shell
        </span>

        <button className="flex items-center gap-2 px-4 py-2 text-sm border rounded-lg hover:bg-[var(--color-bg-hover)] transition">
          <Settings className="w-4 h-4" />
          Settings
        </button>
      </div>
    </header>
  )
}
