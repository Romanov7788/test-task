import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import "./VideoList.scss";
import getVideoDuration from "../../../utils/getVideoDuration";

const VideoList = observer(({ videos, setVideos, setSelectedVideoId, selectedVideoId, setUseWebcam, useWebcam }) => {
  const [newVideoTitle, setNewVideoTitle] = useState("");
  const [newVideoSrc, setNewVideoSrc] = useState("");

  const handleAddVideo = async () => {
    if (!newVideoTitle.trim() || !newVideoSrc.trim()) {
      alert("Введите название и ссылку на видео!");
      return;
    }
  
    const duration = await getVideoDuration(newVideoSrc);
  
    const newVideo = {
      id: String(videos.length + 1),
      title: newVideoTitle,
      src: newVideoSrc,
      duration: duration || "Unknown",
    };
  
    setVideos([...videos, newVideo]);
  
    setNewVideoTitle("");
    setNewVideoSrc("");
  };
  

  return (
    <div className="playlist-container">
      <div className="add-video-section">
        <input
          type="text"
          placeholder="Название видео"
          value={newVideoTitle}
          onChange={(e) => setNewVideoTitle(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Ссылка на видео"
          value={newVideoSrc}
          onChange={(e) => setNewVideoSrc(e.target.value)}
          className="input-field"
        />
        <button className="add-video-btn" onClick={handleAddVideo}>
          Добавить
        </button>

        <button className="toggle-webcam-btn" onClick={() => setUseWebcam((prev) => !prev)}>
          {useWebcam ? "Переключиться на видео" : "Запустить веб-камеру"}
        </button>
      </div>

      <ul className="video-list">
        {videos.map((video) => (
          <li
            key={video.id}
            className={`video-item ${selectedVideoId === video.id ? "active" : ""}`}
            onClick={() => setSelectedVideoId(video.id)}
          >
            <input
              type="checkbox"
              className="video-checkbox"
              checked={selectedVideoId === video.id}
              readOnly
            />
            <span className="video-title">{video.id}. {video.title}</span>
            <span className="video-duration">{video.duration}</span>
            <button
              className="remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                setVideos(videos.filter((v) => v.id !== video.id));
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
