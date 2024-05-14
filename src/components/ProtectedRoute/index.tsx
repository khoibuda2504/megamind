import { Navigate, Outlet } from "react-router-dom";
import { SideMenu } from "@/components/index";
import { useAuthStore } from "@/store";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthStore();
  return isAuthenticated ? (
    <>
      <SideMenu>
        <Outlet />
      </SideMenu>
    </>
  ) : (
    <Navigate to="/login" state={{ from: window.location.pathname }} />
  );
};

export default ProtectedRoute;
