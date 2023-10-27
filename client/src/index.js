import React from "react";
import  {createRoot}  from "react-dom/client";
import App from "./App";

// for React 17 : ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById("root")).render(<App />);
