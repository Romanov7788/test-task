import React, { useState } from "react";

import { observer } from "mobx-react-lite";

import "./VideoList.scss";

const VideoList = observer(({ store }) => {
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoSrc, setNewVideoSrc] = useState("");

  const handleAddVideo = () => {
    if (newVideoTitle.trim() && newVideoSrc.trim()) {
      const newVideo = {
        id: String(store.videos.length + 1),
        title: newVideoTitle,
        src: newVideoSrc,
        duration: "Unknown",
      };
      store.addVideo(newVideo);
      setNewVideoTitle("");
      setNewVideoSrc("");
    } else {
      alert("Invalid name or URL!");
    }
  };

  return (
    <div className="playlist-container">
      <div className="add-video-section">
        <input
          type="text"
          placeholder="Video name"
          value={newVideoTitle}
          onChange={(e) => setNewVideoTitle(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="URL Video"
          value={newVideoSrc}
          onChange={(e) => setNewVideoSrc(e.target.value)}
          className="input-field"
        />
        <button className="add-video-btn" onClick={handleAddVideo}>
          Add Video
        </button>
        <button className="toggle-webcam-btn" onClick={store.toggleWebcam}>
          {store.useWebcam ? "Back to video" : "Web Cam"}
        </button>
      </div>

      <ul className="video-list">
        {store.videos.map((video) => (
          <li
            key={video.id}
            className={`video-item ${
              store.selectedVideoId === video.id ? "active" : ""
            }`}
            onClick={() => store.setSelectedVideo(video.id)}
          >
            <input
              type="checkbox"
              className="video-checkbox"
              checked={store.selectedVideoId === video.id}
              readOnly
            />
            <span className="video-title">{video.id}. {video.title}</span>
            <span className="video-duration">{video.duration}</span>
            <button
              className="remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                store.removeVideo(video.id);
              }}
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default VideoList;
