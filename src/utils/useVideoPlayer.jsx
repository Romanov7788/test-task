import { useState, useRef, useEffect } from "react";

import videojs from "video.js";
import getVideoDuration from "./getVideoDuration";


const useVideoPlayer = () => {
  const playerRef = useRef(null);
  const [videos, setVideos] = useState([
    { id: "1", title: "Demo Video 1", src: "/videos/demo1.mp4", duration: "" },
    { id: "2", title: "Demo Video 2", src: "/videos/demo2.mp4", duration: "" },
    { id: "3", title: "Demo Video 3", src: "/videos/demo3.mp4", duration: "" },
  ]);
  const [selectedVideoId, setSelectedVideoId] = useState(videos[0].id);
  const [useWebcam, setUseWebcam] = useState(false);

  useEffect(() => {
    const fetchDurations = async () => {
      const updatedVideos = await Promise.all(
        videos.map(async (video) => {
          const duration = await getVideoDuration(video.src);
          return { ...video, duration };
        })
      );
      setVideos(updatedVideos);
    };

    fetchDurations();
  }, [videos]);

  const selectedVideo = videos.find((video) => video.id === selectedVideoId);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: selectedVideo ? [{ src: selectedVideo.src, type: "video/mp4" }] : [],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => videojs.log("player is waiting"));

    player.on("dispose", () => videojs.log("player will dispose"));

    player.on("ended", () => {
      const currentIndex = videos.findIndex((video) => video.id === selectedVideoId);
      if (currentIndex !== -1 && currentIndex < videos.length - 1) {
        setSelectedVideoId(videos[currentIndex + 1].id);
      }
    });
  };

  return {
    playerRef,
    videos,
    setVideos,
    selectedVideoId,
    setSelectedVideoId,
    useWebcam,
    setUseWebcam,
    videoJsOptions,
    handlePlayerReady,
  };
};

export default useVideoPlayer;
