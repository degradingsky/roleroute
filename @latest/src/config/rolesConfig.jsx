export const rolesConfig = {
    Admin: {
      name: "Admin",
      accessibleSections: ["UserManagement"],
      accessibleRoutes: ["/admin"],
    },
    Editor: {
      name: "Editor",
      accessibleSections: ["ContentManagement"],
      accessibleRoutes: ["/editor"],
    },
    Viewer: {
      name: "Viewer",
      accessibleSections: ["DashboardOverview"],
      accessibleRoutes: ["/viewer"],
    },
  };