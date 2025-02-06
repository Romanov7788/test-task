import { types } from "mobx-state-tree";

const Video = types.model("Video", {
  id: types.identifier,
  title: types.string,
  src: types.string,
  duration: types.optional(types.string, "")
});

const VideoStore = types
  .model("VideoStore", {
    videos: types.array(Video),
    selectedVideoId: types.maybe(types.string),
    useWebcam: false
  })
  .actions((self) => ({
    addVideo(video) {
      self.videos.push(video);
    },
    removeVideo(id) {
      self.videos = self.videos.filter((video) => video.id !== id);
    },
    setSelectedVideo(id) {
      self.selectedVideoId = id;
    },
    toggleWebcam() {
      self.useWebcam = !self.useWebcam;
    }
  }));

export const store = VideoStore.create({
  videos: [
    { id: "1", title: "Demo Video 1", src: "/videos/demo1.mp4", duration: "0:09" },
    { id: "2", title: "Demo Video 2", src: "/videos/demo2.mp4", duration: "0:07" },
    { id: "3", title: "Demo Video 3", src: "/videos/demo3.mp4", duration: "0:11" }
  ],
  selectedVideoId: "1"
});

export default VideoStore;
