import React from "react";

import VideoPlayer from "./Player/VideoPlayer/VideoPlayer";
import VideoList from "./Player/VideoList";
import WebcamPlayer from "./Player/webCam";

const VideoContainer = ({
  videos,
  setVideos,
  selectedVideoId,
  setSelectedVideoId,
  useWebcam,
  setUseWebcam,
  videoJsOptions,
  handlePlayerReady,
}) => {
  return (
    <div className="container">
      {useWebcam ? (
        <WebcamPlayer />
      ) : (
        <VideoPlayer src={{ options: videoJsOptions, onReady: handlePlayerReady }} />
      )}

      <VideoList
        videos={videos}
        setVideos={setVideos}
        setSelectedVideoId={setSelectedVideoId}
        selectedVideoId={selectedVideoId}
        setUseWebcam={setUseWebcam}
        useWebcam={useWebcam}
      />
    </div>
  );
};

export default VideoContainer;
