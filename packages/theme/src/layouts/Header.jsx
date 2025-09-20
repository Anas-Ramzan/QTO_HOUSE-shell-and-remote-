// src/layouts/Header.jsx

function Header({ title, subtitle }) {
  return (
    <header className="w-full bg-white shadow p-4">
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </header>
  )
}

export default Header
