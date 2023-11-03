import React from 'react';
import './FarmerFarmingWaveBG.css';

function FarmerFarmingWaveBG() {
    return (
        <svg className="farmer-farming-wave-bg" xmlns="http://www.w3.org/2000/svg" style={{height:'100%'}}>
            {/* Draw a simple farmer */}
            <circle cx="50" cy="50" r="30" fill="saddlebrown" /> {/* Head */}
            <rect x="35" y="80" width="30" height="60" fill="blue" /> {/* Body */}
            <line x1="50" y1="80" x2="50" y2="140" stroke="black" /> {/* Legs */}
            <line x1="35" y1="100" x2="65" y2="100" stroke="black" /> {/* Arms */}
            {/* Draw a simple farming tool */}
            <line x1="65" y1="100" x2="80" y2="130" stroke="black" /> {/* Handle */}
            <line x1="80" y1="130" x2="90" y2="130" stroke="black" /> {/* Blade */}

            {/* Draw a wave form */}
            <path id="wave" d="M0 60 Q 30 90 60 60 T 120 60 T 180 60 T 240 60 T 300 60 T 360 60 V 120 H 0 Z" fill="lightblue" />
        </svg>
    );
}

export default FarmerFarmingWaveBG;