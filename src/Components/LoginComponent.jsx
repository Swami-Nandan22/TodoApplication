import { useState } from "react";
import "./TodoApp.css";
import {
  useNavigate,
} from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState("swaminandan");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const navigate = useNavigate();
    const authContext = useAuth(); 
    function handleUsernameChange(event) {
      console.log(event);
      setUsername(event.target.value);
    }
  
    function handlePasswordChange(event) {
      console.log(event);
      setPassword(event.target.value);
    }
  
    function handleSubmit() {
      if (authContext.login(username, password)) {
        console.log("successfully logged in");
        setShowSuccessMessage(true);
        navigate(`/welcome/${username}`);
        authContext.setAuthenticated(true);
      } else {
        console.log();
        setShowErrorMessage(true);
      }
      console.log(username);
      console.log(password);
    }
  
    return (
      <div className="Login">
        {showSuccessMessage && (
          <div className="successMessage">Authenticated Successfully</div>
        )}
        {showErrorMessage && (
          <div className="errorMessage">
            Authentication Failed, Please correct your Credentials!
          </div>
        )}
        <div className="LoginForm">
          <h1>Time to Login</h1>
          <div>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div>
            <label>Password Name</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="button" name="login" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  