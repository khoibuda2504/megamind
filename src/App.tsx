import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages";
import * as PATH from "@/configs/routesConfig";
import { ProtectedRoute, PageNotFound } from "@/components";
import { productBuildRoute } from "@/routes";
import { UIDrawer } from "@/components/Drawer";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={PATH.LOGIN_PATH} element={<LoginPage />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path={PATH.APP_PATH}
              element={<>Welcome to MegaMind system</>}
            />
            {[...productBuildRoute].map((route) => {
              const { path, element: Element } = route;
              return <Route key={path} path={path} element={<Element />} />;
            })}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <UIDrawer />
    </>
  );
}

export default App;
