import React from "react";
import "./Colorcheck.css";

const colorcheck = (props) => {
    return (
        <div className="color-div">
            <h2>Color</h2>
            <div className="color-check" onChange={props.onChangeEvent}>
                <label className="color-checkbox" >
                    <input type="radio" name="color" value="blue" />
                    <span className="color-checkmark blue-background"></span>
                </label>
                <label className="color-checkbox">
                    <input type="radio" name="color" value="orange" />
                    <span className="color-checkmark orange-background"></span>
                </label>
                <label className="color-checkbox">
                    <input type="radio" name="color" value="green" />
                    <span className="color-checkmark green-background"></span>
                </label>
                <label className="color-checkbox">
                    <input type="radio" name="color" value="teal" />
                    <span className="color-checkmark teal-background"></span>
                </label>
                <label className="color-checkbox">
                    <input type="radio" name="color" value="grey" />
                    <span className="color-checkmark grey-background"></span>
                </label>
            </div>
        </div>
    )
}

export default colorcheck;