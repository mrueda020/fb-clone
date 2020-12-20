import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import Login from "./Login";
import "./App.css";

function App() {
  const user = 1;

  return (
    <div className="App">
      {!user ? (
        <Login></Login>
      ) : (
        <React.Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget></Widget>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
