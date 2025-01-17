import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RoleContext } from "../context/RoleContext";

const Navbar = () => {
  const { role, setRole } = useContext(RoleContext);
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    navigate("/");
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#f4f4f4" }}>
      <div>
        <button onClick={() => handleNavigation("/admin")} style={{ marginRight: "10px" }}>
          Admin
        </button>
        <button onClick={() => handleNavigation("/editor")} style={{ marginRight: "10px" }}>
          Editor
        </button>
        <button onClick={() => handleNavigation("/viewer")}>Viewer</button>
      </div>
      <div>
        <select value={role} onChange={handleRoleChange}>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
