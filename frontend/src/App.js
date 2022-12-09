import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPropertyForm from "./components/AddPropertyForm";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/add-property">
          <AddPropertyForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
