import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { useEffect } from "react";
import useGetMyProfile from "./hooks/useGetMyProfile";
import Profile from "./components/Profile";
import MyConnections from "./components/MyConnections";
import Requests from "./components/Requests.jsx";
import Chat from "./components/Chat.jsx";

function App() {
  const { getMyProfile } = useGetMyProfile();

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/connections" element={<MyConnections />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/chat/:receiverId" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
