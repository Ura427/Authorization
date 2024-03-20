import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RootType } from "./store/store";

import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn = useSelector((state: RootType) => state.isLoggedIn);  
  const currUser = useSelector((state: RootType) => state.user);


  console.log(isLoggedIn);
  console.log(currUser);

  return (
    <BrowserRouter>
      <div className="flex justify-center items-center h-screen bg-stone-100">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route
            path="/home"
            element={isLoggedIn ? <Home /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
