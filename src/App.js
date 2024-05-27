import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import api from "./utils/api";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import TodoPage from "./pages/TodoPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";

function App() {
  const [user, setUser] = useState(null) //{name: "test"}

  const getUser = async()=>{ //get user info using token
    try{
      const storedToken = sessionStorage.getItem("token");
      if(storedToken){
        // api.defaults.headers['authorization'] = "Bearer " + storedToken
        const response = await api.get("/user/me");
        // console.log(response)
        setUser(response.data.user);
      }
    }catch(err){
      setUser(null);
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <Routes>
      <Route path="/" element={<PrivateRoute user={user}><TodoPage /></PrivateRoute>} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage user={user} setUser={setUser}/>} />
    </Routes>
  );
}

export default App;
