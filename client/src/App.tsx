import { BrowserRouter } from "react-router-dom";
import { LayoutApp } from "./components/LayoutApp/LayoutApp";
import { RouterApp } from "./routes/RouterApp";

export const App = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <RouterApp />
      </LayoutApp>
    </BrowserRouter>
  );
}
