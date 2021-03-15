import { Alert } from "./components/Alert";
import { BandAdd } from "./components/BandAdd";
import { BandList } from "./components/BandList";
import { TYPE_ALERT } from './helpers/alert-types';

const App = () => {
  return (
    <div className="container pt-5">
      <Alert title="Service Status:" message="Online" type={TYPE_ALERT.SUCCESS} />
      
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
