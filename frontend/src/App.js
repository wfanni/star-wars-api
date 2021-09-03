import './App.css';
import { usePlanets } from "./api/useData";
import { useState } from "react";
import React from "react";
import SPlanets from "./components/Planets.jsx";
// import planets from "./components/planets.json";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default function App() {

  function sendPeopleToServer(e, planet) {
    // fetch post a szerver felé a planet.residents listával JSON formában
  }

  const [pageNum, setPageNum] = useState(1)

  const planets = usePlanets(pageNum);

  console.log(planets)

  return (
    <div className="App">
      <h1>Star Wars Universe</h1>
      <h2>Planets</h2>
      <button onClick={() => setPageNum(pageNum + 1)}>textNext</button>
      { planets.results ? <SPlanets data={planets.results} /> : <div>Error from app.js</div> }
      {/* <SPlanets data={planets.results} /> */}
      
    </div>
  );
}
