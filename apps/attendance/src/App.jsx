import React from "react";
import { Cards, Header, PageLayout, Sidebar } from "@qto/qto-theme";

function App() {
  return (
    <PageLayout>
      <Header title="Attendance Portal" />
      <div className="flex">
        <Sidebar />
        <main className="p-6 flex-1">
          <h1 className="text-2xl font-bold mb-4">Welcome to Attendance</h1>
          <Cards title="Today’s Status">
            <p className="text-sm text-gray-600">
              Here you’ll see attendance updates, check-in/check-out, and break status.
            </p>
          </Cards>
        </main>
      </div>
    </PageLayout>
  );
}

export default App;
