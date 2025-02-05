import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Cursos from "./pages/Cursor";
import VideoContainer from "./components/VideoContainer";
import Tabs from "./components/Tabs";
import useVideoPlayer from "./utils/useVideoPlayer";

const App = () => {
  const {
    videos,
    setVideos,
    selectedVideoId,
    setSelectedVideoId,
    useWebcam,
    setUseWebcam,
    videoJsOptions,
    handlePlayerReady,
  } = useVideoPlayer();

  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>

        <VideoContainer
          videos={videos}
          setVideos={setVideos}
          selectedVideoId={selectedVideoId}
          setSelectedVideoId={setSelectedVideoId}
          useWebcam={useWebcam}
          setUseWebcam={setUseWebcam}
          videoJsOptions={videoJsOptions}
          handlePlayerReady={handlePlayerReady}
        />

        <Tabs />
      </div>
    </Router>
  );
};

export default App;
