import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Form from "./components/Form";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home"
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState(null)
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center h-screen bg-stone-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
