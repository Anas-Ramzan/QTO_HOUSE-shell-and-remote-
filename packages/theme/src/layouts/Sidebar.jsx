import { Home, Library, Users, Menu, Building2 } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 h-screen bg-gray-200 border-r">
      {/* Top Logo */}
      <div className="flex items-center gap-2 p-6 border-b">
        <Building2 className="w-7 h-7 text-green-600" />
        <div>
          <h1 className="text-lg font-semibold text-gray-900">QTO House</h1>
          <p className="text-sm text-gray-500">Main Shell</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg bg-green-600 text-white"
        >
          <Home className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">Dashboard</p>
            <p className="text-xs">Main overview</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300"
        >
          <Library className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">QTO Theme</p>
            <p className="text-xs text-gray-500">Component Library</p>
          </div>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-300"
        >
          <Users className="w-5 h-5" />
          <div>
            <p className="text-sm font-medium">Attendance Portal</p>
            <p className="text-xs text-gray-500">Employee Management</p>
          </div>
        </a>
      </nav>

      <div className="p-4 border-t">
        <button className="flex items-center gap-2 text-sm text-green-500 hover:text-gray-700">
          <Menu className="w-4 h-4" />
          Collapse
        </button>
      </div>
    </aside>
  )
}
