import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Placeholder from "./pages/Placeholder"; 
import Swimmers1to5Page from "./pages/Swimmers1to5Page";   // ✅ Updated import name
import Swimmers6to10Page from "./pages/Swimmers6to10Page"; // ✅ NEW import for 6-10
import ParentnTots1to3Page from "./pages/ParentnTots1to3Page";
import Preschools1to5Page from "./pages/Preschools1to5Page";
import Adult1to3Page from "./pages/Adult1to3Page";
import Teen1to3Page from "./pages/Teen1to3Page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/parent-tot" element={<ParentnTots1to3Page/>}/>
        <Route path="/preschool" element={<Preschools1to5Page/>} />
        <Route path="/swimmers-1-5" element={<Swimmers1to5Page />} />  {/* ✅ Updated component name */}
        <Route path="/swimmers-6-10" element={<Swimmers6to10Page />} /> {/* ✅ Updated to use new page */}
        <Route path="/adult" element={<Adult1to3Page/>} />
        <Route path="/teen" element={<Teen1to3Page/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);