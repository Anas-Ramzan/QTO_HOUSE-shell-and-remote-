import React, { Suspense } from "react";

const Header = React.lazy(() => import("theme/Header"));
const Sidebar = React.lazy(() => import("theme/Sidebar"));
const AttendanceApp = React.lazy(() => import("attendance/App"));

export default function App() {
  return (
    <Suspense fallback={<div className="p-6">Loading UI…</div>}>
      <div className="min-h-screen grid grid-cols-[260px_1fr]">
        <Sidebar />
        <div>
          <Header
            title="QTO Shell"
            subtitle="Host Application with Module Federation"
          />
          <div className="p-6">
            <AttendanceApp />
          </div>
        </div>
      </div>
    </Suspense>
  );
}
