import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Shared/Auth/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <progress
          className="progress progress-accent w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-accent w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-accent w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-accent w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-accent w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
