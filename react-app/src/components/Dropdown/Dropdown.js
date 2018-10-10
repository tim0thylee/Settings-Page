import React from "react";
import "./Dropdown.css";

const dropdown = (props) => {
    return (
        <div className="dropdown">
            <h1>{props.heading}</h1>
            <select onChange={props.onChangeEvent}>
                <option value={props.option1}>{props.option1}</option>
                <option value={props.option2}>{props.option2}</option>
                <option value={props.option3}>{props.option3}</option>
                <option value={props.option4}>{props.option4}</option>
            </select>
            <div className="line-border">
            </div>
        </div>
    )
}

export default dropdown;