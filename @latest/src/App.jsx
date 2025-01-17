import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoleProvider } from "./context/RoleContext";
import Dashboard from "./pages/Dashboard";
import Unauthorized from "./pages/Unauthorized";
import Admin from "./pages/UserManagement";
import Editor from "./pages/ContentManagement";
import Viewer from "./pages/DashboardOverview";
import RoleGuard from "./components/RoleGuard";

const App = () => {
  return (
    <RoleProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/admin"
            element={
              <RoleGuard allowedRoles={["Admin"]}>
                <Admin />
              </RoleGuard>
            }
          />
          <Route
            path="/editor"
            element={
              <RoleGuard allowedRoles={["Editor"]}>
                <Editor />
              </RoleGuard>
            }
          />
          <Route
            path="/viewer"
            element={
              <RoleGuard allowedRoles={["Viewer"]}>
                <Viewer />
              </RoleGuard>
            }
          />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </RoleProvider>
  );
};

export default App;
