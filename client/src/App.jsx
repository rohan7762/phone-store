import { useEffect, useState } from "react";
import { getServerStatus } from "./services/api";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getServerStatus()
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Phone Store</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;