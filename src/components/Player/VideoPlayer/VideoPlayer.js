import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import "./VideoPlayer.scss";

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options = {}, onReady} = src;

  useEffect(() => {

  if (!playerRef.current) {
    const videoElement = document.createElement("video-js");

    videoElement.classList.add('vjs-big-play-centered');
    videoRef.current.appendChild(videoElement);

    const player = (playerRef.current = videojs(videoElement, {
      ...options,
      controls: true,
      autoplay: false,
      aspectRatio: "16:9",
      responsive: true,
      fluid: false,
      width: 627,
      height: 347,
    }, () => {
      videojs.log('player is ready');
      onReady && onReady(player);
    }));

  } else {
    const player = playerRef.current;

    player.autoplay(options.autoplay);
    player.src(options.sources);
  }
}, [options, videoRef, onReady]);

useEffect(() => {
  const player = playerRef.current;

  return () => {
    if (player && !player.isDisposed()) {
      player.dispose();
      playerRef.current = null;
    }
  };
}, [playerRef]);

return (
  <div data-vjs-player className="video-container">
    <div ref={videoRef} className="video-js"/>
  </div>
);
}

export default VideoPlayer;
