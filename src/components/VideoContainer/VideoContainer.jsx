import React from 'react';

import VideoPlayer from '../Player/VideoPlayer';
import VideoList from '../Player/VideoList';
import WebcamPlayer from '../Player/webCam';
import { observer } from 'mobx-react-lite';

import './VideoContainer.scss';

const VideoContainer = observer(({ store }) => {
  const selectedVideo = store.videos.find(
    (video) => video.id === store.selectedVideoId
  );

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: selectedVideo
      ? [{ src: selectedVideo.src, type: 'video/mp4' }]
      : [],
  };

  return (
    <div className="container">
      {store.useWebcam ? (
        <WebcamPlayer />
      ) : (
        <VideoPlayer src={{ options: videoJsOptions }} />
      )}
      <VideoList store={store} />
    </div>
  );
});

export default VideoContainer;
