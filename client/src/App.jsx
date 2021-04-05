import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Alert } from "./components/Alert";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { ENV } from "./environment";
import { TYPE_ALERT } from './helpers/alert-types';
import { SOCKET_EVENTS } from "./helpers/event-types";

const connectSocketServer = () => io(ENV.SOCKET_SERVER, { transports: ["websocket"] });

const App = () => {
  const [online, setOnline] = useState(false);
  const [socket] = useState(connectSocketServer());
  const [alert, setAlert] = useState({ message: "Offline", type: TYPE_ALERT.DANGER });
  const [bands, setBands] = useState([]);

  useEffect(() => {
    setOnline(socket.connected);
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
      setAlert({ message: "Online", type: TYPE_ALERT.INFO });
    });

    return () => socket.disconnect();

  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
      setAlert({ message: "Offline", type: TYPE_ALERT.DANGER });
    });

    return () => socket.disconnect();

  }, [socket]);

  useEffect(() => {
    socket.on(SOCKET_EVENTS.CURRENT_BANDS, bands => {
      setBands(bands);
    });
  }, [socket]);

  const handleVote = id => {
    socket.emit(SOCKET_EVENTS.VOTE_BAND, id);
  }

  const handleDelete = id => {
    socket.emit(SOCKET_EVENTS.DELETE_BAND, id);
  }

  const handleAdd = name => {
    socket.emit(SOCKET_EVENTS.ADD_BAND, name);
  }

  const handleOnBlur = (band) => {
    console.log(band)
    socket.emit(SOCKET_EVENTS.CHAGE_NAME, band);
  }

  return (
    <div className="container pt-2">
      <Alert message={alert.message} type={alert.type} />

      <h1>BandNames</h1>
      <hr />

      <div className="row">
        <div className="col-8">
          <BandList data={bands} handleVote={handleVote} handleDelete={handleDelete} handleOnBlur={handleOnBlur} />
        </div>

        <div className="col-4">
          <BandAdd handleAdd={handleAdd} />
        </div>
      </div>

    </div>
  );
}

export default App;
