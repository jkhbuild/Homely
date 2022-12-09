import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/add-property">
          <addPropertyForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
