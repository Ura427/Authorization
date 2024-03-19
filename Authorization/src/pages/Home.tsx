import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Unauthorize} from "../store/Slices/AuthSlice"

function Home() {
  const currUserName = useSelector((state) => state.user.username);
  const dispatch = useDispatch()

  const LogoutHandler = () => {
      dispatch(Unauthorize())
  }

  return (
    <div className="flex flex-col">
      <span>Hello, {currUserName}</span>
      <button className="py-1 px-2 mt-8 bg-cyan-500 rounded-md text-white " onClick={LogoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default Home;
