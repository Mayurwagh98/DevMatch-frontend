import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import Feed from "./components/Feed";
import { useEffect } from "react";

import useGetMyProfile from "./hooks/useGetMyProfile";

function App() {
  const { getMyProfile } = useGetMyProfile();

  useEffect(() => {
    getMyProfile();
  }, []);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Feed />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
