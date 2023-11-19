import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Shared/NavBar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Footer from "./components/Shared/Footer/Footer";
import RequireAuth from "./components/Shared/RequireAuth";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
