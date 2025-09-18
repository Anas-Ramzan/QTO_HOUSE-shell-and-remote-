import { useState } from "react"
import Header from "./layouts/Header"
import Sidebar from "./layouts/Sidebar"
import Card from "./components/Cards"
import { Building2, Palette, Users } from "lucide-react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex flex-col items-center p-10">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <Building2 className="w-14 h-14 text-green-600 mx-auto mb-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Welcome to QTO House
            </h1>
            <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
              Your main dashboard for managing enterprise applications.
              Use the sidebar to navigate to different modules.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card
              icon={Palette}
              title="QTO Theme"
              subtitle="Component Library & Design System"
              description="Access reusable components and design tokens."
              buttonText="Open QTO Theme"
              buttonStyle="primary"

            />

            <Card
              icon={Users}
              title="Attendance Portal"
              subtitle="Track Employee Attendance"
              description="Manage check-ins, check-outs, and reports."
              buttonText="Open Attendance"
                buttonStyle="secondary"

            />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
