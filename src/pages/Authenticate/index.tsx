import { useAuthStore } from "@/store";
import { Button } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, setAuthenticated } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) return;
    // prevent user go back
    navigate(location.state.from, { replace: true });
  }, [isAuthenticated]);
  return (
    <>
      <div>Press button to login</div>
      <Button type="primary" onClick={() => setAuthenticated(true)}>
        Login
      </Button>
    </>
  );
};

export default Login;
