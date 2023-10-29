import "../style/listening.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Link } from "react-router-dom";

import { AiOutlineSend } from "react-icons/ai";

const Listening = () => {
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  startListening();
  localStorage.setItem("data", transcript);
  return (
    <>
      <div className="listening">
        <p className="title">Listening...</p>
        <div className="logo"></div>
        <div className="outer-circle"></div>
        <div className="outer-circle-2"></div>
      </div>
      <div className="container">
        <div className="main-content">{transcript}</div>
        <div>
          <div className="btn-style">
            <button onClick={SpeechRecognition.stopListening}>
              <Link to={{ pathname: "/response" }}>
                <AiOutlineSend />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Listening;
