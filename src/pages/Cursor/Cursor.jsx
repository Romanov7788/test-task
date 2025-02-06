import React from 'react';

import VideoContainer from '../../components/VideoContainer/VideoContainer';
import { store } from '../../components/Player/VideoStore';
import Tabs from '../../components/Tabs';

import './Cursor.scss';

const Cursos = () => {
  return (
    <div className="curso-container">
      <VideoContainer store={store} />
      <Tabs />
    </div>
  );
};

export default Cursos;
