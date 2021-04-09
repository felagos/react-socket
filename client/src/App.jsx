import { useContext } from "react";
import { Alert } from "./components/Alert";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { SocketContext } from "./context/SocketContext";

const App = () => {

  const { alert } = useContext(SocketContext);

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
