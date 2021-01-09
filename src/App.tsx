import React, { useEffect } from "react";
import axios from "axios";
function App() {
  useEffect(() => {
    axios
      .post("api/login", { username: "test", password: "123" })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return <></>;
}

export default App;
