import React from "react";
import Navbar from "./components/Navbar";
import NewAuthor from "./components/NewAuthor";
import AllAuthors from "./components/AllAuthors";
import EditAuthor from "./components/EditAuthor";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <AllAuthors path="/authors" />
        <EditAuthor path="/authors/:id/edit" />
        <NewAuthor path="/authors/new" />
      </Router>
    </div>
  );
}

export default App;
