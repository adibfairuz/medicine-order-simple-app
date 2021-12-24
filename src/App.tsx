import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import List from './app/pages/List';
import Detail from './app/pages/Detail';
import Global from './app/styles/Global';

function App() {
  return (
    <>
      <Global />
      <Router>
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
