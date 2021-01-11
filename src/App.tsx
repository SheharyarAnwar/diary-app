import React, { useEffect } from "react";
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
import theme from "./theme";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@material-ui/core";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-right"
            autoClose={2000}
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
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
