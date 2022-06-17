import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ParentComponent from "./components/ParentComponent";
import { Fallback } from "./components/ErrorBoundry/Fallback";

import "./App.css";

function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging: ", error, errorInfo);
  };
  return (
    <div className="App">
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <ParentComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
