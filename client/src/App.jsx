import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Alert } from "./components/Alert";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { ENV } from "./environment";
import { TYPE_ALERT } from './helpers/alert-types';

const connectSocketServer = () => io(ENV.SOCKET_SERVER, { transports: ["websocket"] })

const App = () => {
  console.log("aca")
  const [online, setOnline] = useState(false);
  const [socket] = useState(connectSocketServer());
  const [alert, setAlert] = useState({ message: "Offline", type: TYPE_ALERT.DANGER })

  useEffect(() => {
    setOnline(socket.connected);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
      setAlert({ message: "Online", type: TYPE_ALERT.SUCCESS });
    });

    return () => socket.disconnect()

  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
      setAlert({ message: "Offline", type: TYPE_ALERT.DANGER });
    });

    return () => socket.disconnect()
  }, [socket]);


  return (
    <div className="container pt-2">
      <Alert message={alert.message} type={alert.type} />

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>

    </div>
  );
}

export default App;
