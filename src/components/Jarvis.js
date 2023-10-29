import React from "react";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import Listening from "./Listen";

function Jarvis() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return <div className="App">{isLoading ? <Loading /> : <Listening />}</div>;
}

export default Jarvis;
