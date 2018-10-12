import React, { Component } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Colorcheck from "../Colorcheck/Colorcheck";
import "./Container.css";
// import Fontsizer from "../Fontsizer/Fontsizer";

class Container extends Component {

    constructor (props){
        super(props)

        this.state = {
            chosenFont: "Roboto",
            chosenFontClass:"robotoFont",
            chosenStyle: "Normal",
            chosenStyleClass: "normalClass",
            chosenColor: "blue",
            chosenColorClass: "blueColorClass",
            toggleSwitchState: false
        }

        this.changeFont = this.changeFont.bind(this);
        this.changeStyle= this.changeStyle.bind(this);
        this.changeColor= this.changeColor.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
    }

    changeFont = (event) => {
        let chosen = ""
        
        if(event.target.value === "Roboto"){
            chosen = "robotoFont"
        } else if (event.target.value === "K2D"){
            chosen = "K2DFont"
        } else if (event.target.value === "Niramit") {
            chosen = "niramitFont"
        } else if (event.target.value === "OpenSans") {
            chosen = "openSansFont"
        }

        this.setState({
            chosenFont: event.target.value,
            chosenFontClass: chosen
        })
        console.log(this.state.chosenFontClass)
    };

    changeStyle = (event) => {

        let chosen = ""

        if(event.target.value === "Normal"){
            chosen = "normalStyle"
        } else if (event.target.value === "Italic"){
            chosen = "italicStyle"
        } else if (event.target.value === "Bold") {
            chosen = "boldStyle"
        } else if (event.target.value === "Small-Caps") {
            chosen = "smallCapsStyle"
        }

        this.setState({
            chosenStyle: event.target.value,
            chosenStyleClass: chosen
        })
    }

    changeColor = (event) => {
        let chosen = ""

        if(event.target.value === "blue"){
            chosen = "blueColorClass"
        } else if (event.target.value === "green"){
            chosen = "greenColorClass"
        } else if (event.target.value === "orange") {
            chosen = "orangeColorClass"
        } else if (event.target.value === "teal") {
            chosen = "tealColorClass"
        } else {
            chosen ="greyColorClass"
        }
        
        this.setState({
            chosenColor: event.target.value,
            chosenColorClass: chosen
        })

    }

    toggleSwitch = (event) => {
        this.setState({
            toggleSwitchState: event.target.checked
        })
        
        if(this.state.toggleSwitchState){
            
        }
    }

    render () {
        return (
            <div className="container">
                <div className={["left-side-container " + " " + this.state.chosenColorClass]}>
                    <h1 className="left-side-container-heading">Font Settings</h1>
                    <div className="font-div">
                        <h1 className={["font-shown" + " "  + this.state.chosenFontClass + " " + this.state.chosenStyleClass]}>Ab</h1>
                        <div className="font-settings">
                            <p className="font-chosen">{this.state.chosenFont}</p>
                            <p className="style-chosen">{this.state.chosenStyle}</p>
                        </div>
                    </div>
                    <label className="toggle-switch">
                        <input type="checkbox" checked={this.state.toggleSwitchState} onChange={this.toggleSwitch}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="right-side-container">
                    <Dropdown
                        onChangeEvent={this.changeFont} 
                        heading="Fonts"
                        option1="Roboto"
                        option2="K2D"
                        option3="Niramit"
                        option4="OpenSans"
                    />
                    <Dropdown
                        onChangeEvent={this.changeStyle} 
                        heading="Style"
                        option1="Normal"
                        option2="Bold"      //font-weight
                        option3="Italic"    //font-style
                        option4="Small-Caps" //font-variant
                    />
                    <Colorcheck 
                        onChangeEvent={this.changeColor}
                    />
                    {/* <Fontsizer /> */}
                </div>
            </div>
        )
    }
}

export default Container;