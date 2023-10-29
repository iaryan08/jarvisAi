import "../style/response.css";
import OpenAI from "openai";
import { useState } from "react";

function Response() {
  const data = useState(localStorage.getItem("data"));

  const openai = new OpenAI({
    apiKey: "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",
    "dangerouslyAllowBrowser":true,

  });
  const chatCompletion = async () =>
   { await openai.chat.completions.create({
      messages: [{ role: "user", content: data }],
      model: "gpt-3.5-turbo",})
      .then((response) => {
        console.log(response);
      })
   }
   chatCompletion();
  return (
    <>
      <div className="music-waves">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div></div>
    </>
  );
}

export default Response;
