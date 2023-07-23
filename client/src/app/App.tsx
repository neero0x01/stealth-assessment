import React from "react";
import "./App.css";
import { Router } from "./Routes";
import {RouterProvider} from "react-router-dom";

function App() {
    return (
        <RouterProvider router={Router} />
    );
}

export default App;
