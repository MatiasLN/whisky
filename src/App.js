import React from "react";
import { UserProvider } from "./context/UserContext";
import MainContent from "./comps/MainContent";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <MainContent />
      </div>
    </UserProvider>
  );
}

export default App;
