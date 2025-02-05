import { types } from "mobx-state-tree";

const Video = types.model("Video", {
  id: types.identifier,
  title: types.string,
  src: types.string,
});

const VideoStore = types
  .model("VideoStore", {
    videos: types.array(Video),
    selectedVideo: types.maybe(types.reference(Video)),
  })
  .actions((self) => ({
    addVideo(video) {
      self.videos.push(video);
    },
    removeVideo(id) {
      self.videos.replace(self.videos.filter((v) => v.id !== id));
      if (self.selectedVideo?.id === id) {
        self.selectedVideo = self.videos.length > 0 ? self.videos[0] : null;
      }
    },
    selectVideo(id) {
      const video = self.videos.find((v) => v.id === id);
      if (video) {
        self.selectedVideo = video;
      }
    },
  }));

const store = VideoStore.create({
  videos: [
    { id: "1", title: "Demo Video 1", src: "/videos/demo1.mp4" },
    { id: "2", title: "Demo Video 2", src: "/videos/demo2.mp4" },
    { id: "3", title: "Demo Video 3", src: "/videos/demo3.mp4" },
  ],
  selectedVideo: "1",
});

export default store;
