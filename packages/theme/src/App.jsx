import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./layouts/Sidebar";
import Card from "./components/Cards";
import PageLayout from "./layouts/PageLayout";
import Header from "./layouts/Header";
import { Building2, Palette, Users } from "lucide-react";
import "./App.css";

function App() {
  const location = useLocation();

  // Global header defaults
  let headerTitle = "Dashboard";
  let headerSubtitle = "Overview of your applications";

  if (location.pathname === "/theme") {
    headerTitle = "QTO Theme Library";
    headerSubtitle = "Component library and design system";
  } else if (location.pathname === "/attendance") {
    headerTitle = "Attendance Portal";
    headerSubtitle = "Track employee attendance";
  }

  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        {/* Global header */}
        <Header title={headerTitle} subtitle={headerSubtitle} />

        <main className="flex-1 p-10 overflow-y-auto">
          <Routes>
            {/* Dashboard */}
            <Route
              path="/"
              element={
                <div>
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
                </div>
              }
            />



            <Route
              path="/theme"
              element={
                <PageLayout
                  icon={Palette}
                  title="QTO Theme Components"
                  subtitle="Component showcase will load here"
                  contentTitle="QTO Theme Components"
                  contentSubtitle="Component showcase will load here"
                  contentDescription="QTO Theme remote components will be displayed here."
                />
              }
            />


            {/* Attendance */}
            {/* <Route
              path="/attendance"
              element={
                <PageLayout
                  icon={Users}
                  title="Attendance Management"
                  subtitle="Employee attendance tracking"
                  contentDescription="Check-ins, check-outs, reports and more."
                />
              }
            /> */}
            <Route
              path="/attendance"
              element={
                <PageLayout
                  icon={Users}  // or whichever icon you prefer
                  title="Attendance Portal"
                  subtitle="Employee attendance management system"
                  contentTitle="Attendance Dashboard"
                  contentSubtitle="Attendance data will load here"
                  contentDescription="Attendance Portal remote components will be displayed here."
                />
              }
            />


          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
