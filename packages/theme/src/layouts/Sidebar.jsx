import { Home, Library, Users, Menu, Building2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const location = useLocation()

  const links = [
    {
      to: "/",
      icon: <Home className="w-5 h-5" />,
      title: "Dashboard",
      subtitle: "Main overview",
    },
    {
      to: "/theme",
      icon: <Library className="w-5 h-5" />,
      title: "QTO Theme",
      subtitle: "Component Library",
    },
    {
      to: "/attendance",
      icon: <Users className="w-5 h-5" />,
      title: "Attendance Portal",
      subtitle: "Employee Management",
    },
  ]

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
        {links.map((link) => {
          const isActive = location.pathname === link.to
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-300"
              }`}
            >
              {link.icon}
              <div>
                <p className="text-sm font-medium">{link.title}</p>
                <p
                  className={`text-xs ${
                    isActive ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {link.subtitle}
                </p>
              </div>
            </Link>
          )
        })}
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
