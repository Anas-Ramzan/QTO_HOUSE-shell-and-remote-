import React, { Suspense } from "react";

const Header = React.lazy(() => import("theme/Header"));
const Sidebar = React.lazy(() => import("theme/Sidebar"));

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-[260px_1fr]">
      <Suspense fallback={<div className="p-6">Loading Sidebar…</div>}>
        <Sidebar />
      </Suspense>

      <div>
        <Suspense fallback={<div className="p-6">Loading Header…</div>}>
          <Header
            title="Attendance Portal"
            subtitle="Employee Attendance Management System"
          />
        </Suspense>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900">Attendance Dashboard</h2>
          <p className="text-gray-600">
            Here you’ll manage check-ins, check-outs, reports, and attendance records.
          </p>
        </div>
      </div>
    </div>
  );
}
