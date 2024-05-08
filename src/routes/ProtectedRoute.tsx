import { Navigate, Outlet } from "react-router-dom";
import { NavBarMenu } from "@/components/index";
import { useAuthStore } from "@/store";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? (
    <>
      <NavBarMenu>
        <Outlet />
      </NavBarMenu>
    </>
  ) : (
    <Navigate to="/login" state={{ from: window.location.pathname }} />
  );
};

export default ProtectedRoute;
