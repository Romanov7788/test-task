import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { observer } from "mobx-react-lite";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Cursos from "./pages/Cursor/Cursor";

const App = observer(() => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
});

export default App;
