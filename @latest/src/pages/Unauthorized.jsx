import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Unauthorized</h1>
      <p>You do not have permission to view this page.</p>
      <button onClick={() => navigate("/")}>Back to Dashboard</button>
    </div>
  );
};

export default Unauthorized;