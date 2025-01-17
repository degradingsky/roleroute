import React, { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { Navigate } from "react-router-dom";

const RoleGuard = ({ allowedRoles, children }) => {
  const { role } = useContext(RoleContext);

  return allowedRoles.includes(role) ? children : <Navigate to="/unauthorized" />;
};

export default RoleGuard;