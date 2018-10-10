import React from "react";
import "./Fontsizer.css";

const fontsizer = () => {
    return (
        <div className="font-sizer">
            <h2>Size</h2>
            <input type="range" min="1" max="100" defaultValue="50" className="font-slider" id="fontSlider"/>
        </div>
    )
}

export default fontsizer;