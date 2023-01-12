import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import AddPropertyForm from "./components/AddPropertyForm";
import EditPropertyForm from "./components/EditPropertyForm";
import SearchResults from "./components/SearchResults";
import Splash from "./components/Splash";
import ShowListing from "./components/ShowListing";
import UserShow from "./components/UserShow";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Splash />
        </Route>
        <Route exact path="/add-property">
          <AddPropertyForm />
        </Route>
        <Route exact path="/users/:userid">
          <UserShow />
        </Route>
        <Route exact path="/listings/:listingId">
          <EditPropertyForm />
        </Route>
        <Route exact path="/search">
          <SearchResults />
        </Route>
        <Route exact path="/search/:query">
          <SearchResults />
        </Route>
        <Route exact path="/listings/:listingId/show">
          <ShowListing />
        </Route>
      </Switch>
    </>
  );
}

export default App;
