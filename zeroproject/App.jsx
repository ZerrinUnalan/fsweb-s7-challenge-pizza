import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import OrderPizza from "./components/OrderPizza";
import OrderSuccess from "./components/OrderSuccess";
import { useState } from "react";

function App() {
  const [siparisData, setSiparisData] = useState({});

  const data = (data) => {
    setSiparisData(data);
  };

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/OrderPizza">
          <OrderPizza data={data} />
        </Route>
        <Route exact path="/OrderSuccess">
          <OrderSuccess siparisData={siparisData} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
