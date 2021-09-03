import React from 'react'
import styled from "styled-components";

const Residents = ({ data, toggle, className }) => {
    function handleClose() {
        toggle();
    }

    return (
        <div className={className}>
            <div className="modal_content">
                <span>{data[0].name}</span>
                <span className="close" onClick={handleClose}>Close</span>
            </div>
            
        </div>
    )
}

const SResidents = styled(Residents)`
    // display: none;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.25);

    .modal_content {
    background-color: white;
    position: absolute;
    top: 20%;
    left: 30%;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    border: 2px solid black;
    }

    .close {
    color: Black;
    float: right;
    }

    .close:hover {
    color: red;
    cursor: pointer;
    }
}
`

export default SResidents
