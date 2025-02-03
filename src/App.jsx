import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
// import { AuthContext } from "./context/AuthProvider";

function App() {
  // const [user, setUser] = useState(null);
  // const authData = useContext(AuthContext);
  // console.log(authData.emplyees);
  useEffect(() => {
    setLocalStorage();
  });
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <Login />
    </>
  );
}

export default App;
