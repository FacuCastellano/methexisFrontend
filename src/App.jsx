import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { View1 } from "./views/view1";
import { View2 } from "./views/view2";
import { View3 } from "./views/view3";
import { View4 } from "./views/view4";
import {ViewNotFound} from "./views/viewNotFound";



// import { View2 } from './components/view2'
function App() {
  return (
    <div className="app">
      <BrowserRouter className="app">
        <Routes>
          <Route path="/home" element={<View1 />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="" element={<Navigate to="/home" replace />} />
          <Route path="/subject" element={<View2 />} />
          <Route path="/unit" element={<View3 />} />
          <Route path="/topic" element={<View4 />} />
          <Route path="*" element={<ViewNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
