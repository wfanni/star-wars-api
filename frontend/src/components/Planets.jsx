import React from 'react';
import SResidents from "./Residents.jsx";
import styled from "styled-components";
import { useState } from 'react'

let currentResidents = null;

const Planets = ({ data, className }) => {
    const [seen, setSeenState] = useState(false)
    const [currentResidents, setCurrentResidents] = useState(null)

    function togglePop () {
        setSeenState(!seen);
    }

    const sendResidents = async (residents) => {
        setSeenState(true)
        setCurrentResidents(null)
        const people = {residents: residents};
        let residentsData;
        await fetch("/people", {
            method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(people)
        })
        .then(response => response.json())
        .then(function (data) {residentsData = data})
        // console.log(residentsData);

        setCurrentResidents(residentsData.people)
        console.log("residentsInput: ", residentsData.people)
    }

    const headers = ["Name", "Diameter", "Climate", "Terrain", "Surface Water Percentage", "Population", "Residents", ""]

    return (
        <div className={className}>
            <div className="container">
            {headers.map((headerText, index) => <p key={index}>{headerText}</p>)}
            </div>
            {data.map((planet, index) => {
                return  <div key={index} className="container">
                            <p>{planet.name}</p>
                            <p>{parseInt(planet.diameter).toLocaleString("en-US")} km</p>
                            <p>{planet.climate}</p>
                            <p>{planet.terrain}</p>
                            <p>{planet.surface_water === "unknown" ? "unknown" : planet.surface_water + "%"}</p>
                            <p>{planet.population === "unknown" ? "unknown" : parseInt(planet.population).toLocaleString("en-US") + " people"}</p>
                            {planet.residents.length > 0 ? <button onClick={(e) => sendResidents(planet.residents)}>{planet.residents.length} Residents</button> : <p>No Residents</p>}
                            <button>Vote</button>
                        </div>
            })}
            {currentResidents && seen ? <SResidents data={currentResidents} toggle={togglePop}/> : null}
        </div>
    )
}

const SPlanets = styled(Planets)`
    display: grid;
    grid-auto-flow: row;

    margin-bottom: 5vh;


    .container {
        background-color: aquamarine;
        margin: auto;
        border: 3px solid black;
        
        display: grid;
        width: 80%;
        justify-content: space-round;
        grid-auto-flow: column;
        grid-template-columns: repeat(8, 1fr);

        p {
            text-align: center;
            place-self: center;
        }

        button {
            width: 100px;
            height: 20px;
            place-self: center;
        }
    }


`

export default SPlanets
