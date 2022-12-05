import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage/index.js";
import SignUpFormPage from "./components/SignUpFormPage/index.js";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignUpFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
