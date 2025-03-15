import "./TodoApp.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from './FooterComponent.jsx';
import HeaderComponent from "./HeaderComponent.jsx";
import ListTODOScOMPONENT from "./ListToDosComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import LoginComponent from "./LoginComponent.jsx";
import AuthProviders,{useAuth} from "./security/AuthContext.js";

function AuthenticatedRouter({children}) {
        const authContext = useAuth();
        if (authContext.isAuthenticated) {
          return children;
        }
        return <Navigate to="/"/>;
}
export default function TodoApp() {
  return (
    <div className="TodoApp">
    <AuthProviders>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/" element={<LoginComponent></LoginComponent>}></Route>
          <Route
            path="/login"
            element={<LoginComponent></LoginComponent>}
          ></Route>
          <Route
            path="/welcome/:username"
            element={
              <AuthenticatedRouter>
                  <WelcomeComponent></WelcomeComponent>
              </AuthenticatedRouter>}
          ></Route>
          <Route
            path="/todos"
            element={
              <AuthenticatedRouter>
                  <ListTODOScOMPONENT></ListTODOScOMPONENT>
              </AuthenticatedRouter>
            }
          ></Route>
          <Route
            path="/logout"
            element={
              <AuthenticatedRouter>
              <LogoutComponent></LogoutComponent>
              </AuthenticatedRouter>
            }
          ></Route>
          <Route path="*" element={<ErrorComponent></ErrorComponent>}></Route>
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
      </AuthProviders>
    </div>
  );
}

