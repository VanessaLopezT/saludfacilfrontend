import { useEffect } from "react";
import api from "./services/api";

function App() {
  useEffect(() => {
    api.get("/schedule")
      .then((res) => {
        console.log("Citas desde el backend:", res.data);
      })
      .catch((err) => {
        console.error("Error al conectar al backend:", err);
      });
  }, []);

  return (
    <div>
      <h1>SaludFácil Frontend</h1>
      <p>Revisa la consola del navegador (F12)</p>
    </div>
  );
}

export default App;