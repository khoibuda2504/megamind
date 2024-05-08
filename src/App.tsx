import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages";
import * as PATH from "@/configs/routesConfig";
import { ProtectedRoute } from "./routes/";
import ProductBuildRoute from "./routes/ProductBuildRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path={PATH.APP_PATH} element={<>hehe</>} />
        <Route path={PATH.LOGIN_PATH} element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          {[...ProductBuildRoute].map((route) => {
            const { path, element: Element } = route;
            return <Route key={path} path={path} element={<Element />} />;
          })}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
