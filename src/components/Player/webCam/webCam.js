import React, { useRef, useState } from "react";

import './webCam.scss';

const WebcamPlayer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const startWebcam = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setIsPlaying(true);
      })
      .catch((error) => console.error("Ошибка доступа к камере:", error));
  };

  return (
    <div className="webcam-container">
      <video ref={videoRef} autoPlay playsInline className="webcam-video" />
      <button onClick={startWebcam} className="webcam-btn">
        {isPlaying ? "Камера активна" : "Запустить камеру"}
      </button>
    </div>
  );
};

export default WebcamPlayer;
