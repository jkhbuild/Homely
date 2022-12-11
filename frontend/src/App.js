import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPropertyForm from "./components/AddPropertyForm";
import EditPropertyForm from "./components/EditPropertyForm";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/add-property">
          <AddPropertyForm />
        </Route>
        <Route exact path="/listings/:listingId">
          <EditPropertyForm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
