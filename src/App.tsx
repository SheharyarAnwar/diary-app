import React from "react";
import store from "./Store";
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from "react-redux";
import Auth from "./Views/Auth/index";
import Dashboard from "./Views/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
        />
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Auth type="login" />}></Route>
            <Route path="/signup" element={<Auth type="signup" />}></Route>
            <Route path="/diaries" element={<Dashboard />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
