import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
