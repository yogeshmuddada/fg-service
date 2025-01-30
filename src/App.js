import React from "react";
import Background from './Components/Background';
import Home from './Components/Home';
import AddRevision from "./Components/AddRevision";

function App() {
  return (
    <div className="relative min-h-screen">
      <Background />
      {/* <Home /> */}
      <AddRevision/>
    </div>
  );
}

export default App;
