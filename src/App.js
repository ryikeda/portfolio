import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components/";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/projects" component={Projects} />
    </>
  );
}

export default App;
