import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        {/* widgets */}
      </div>
    </div>
  );
}

export default App;
