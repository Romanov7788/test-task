const getVideoDuration = (videoSrc) => {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = videoSrc;

    video.onloadedmetadata = () => {
      const minutes = Math.floor(video.duration / 60);
      const seconds = Math.floor(video.duration % 60).toString().padStart(2, "0");
      resolve(`${minutes}:${seconds}`);
    };

    video.onerror = () => {
      console.error(`Error loading metadata in video: ${videoSrc}`);
      resolve("Unknown");
    };

    video.load();
  });
};

export default getVideoDuration;
