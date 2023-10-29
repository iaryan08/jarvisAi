import React from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
import Listening from "./components/Listen";
import Response from "./components/Response";
import Jarvis from "./components/Jarvis";

function App() {
  return (
    <Routes>
        <Route exact path="/" Component={Jarvis}></Route>
        <Route exact path="/loading" Component={Loading}> </Route>
        <Route path="/listening" Component={Listening}> </Route>
        <Route path="/response" Component={Response}> </Route>
    </Routes>
  );
}

export default App;
