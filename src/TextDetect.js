import React, { useState, useRef } from "react";
import Tesseract from "tesseract.js";

function TextDetect() {
  const [ocrResult, setOcrResult] = useState("");
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const startCapture = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error: ", err));
  };

  const stopCapture = () => {
    videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
  };

  const detectText = () => {
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    canvasRef.current
      .getContext("2d")
      .drawImage(
        videoRef.current,
        0,
        0,
        videoRef.current.videoWidth,
        videoRef.current.videoHeight
      );

    Tesseract.recognize(canvasRef.current, "eng", { logger: (m) => console.log(m) })
      .then(({ data: { text } }) => {
        setOcrResult(text);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline />
      <canvas ref={canvasRef} style={{ display:"none" }} />
      <button onClick={startCapture}>Start</button>
      <button onClick={stopCapture}>Stop</button>
      <button onClick={detectText}>Detect Text</button>
      <div>{ocrResult}</div>
    </div>
  );
}

export default TextDetect;
