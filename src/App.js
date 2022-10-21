import { useState, useEffect } from "react";
import { StateProvider } from "./context/StateProvider";
import Text from "./components/Text";
function App() {
  return (
    <StateProvider>
      <div className="app">
        <Text text={"Adi Vrskic"} color="#ccc" />
      </div>
    </StateProvider>
  );
}

export default App;
