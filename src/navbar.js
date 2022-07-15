import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.css'

class NavBar extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{level,onChange} = this.props
        return(
            <header className="navbar">
                <div className="logo">Color Picker</div>
                <div className="slider-container">
                    <span className="slider-level">
                        Level:{level}
                    </span>
                <div className="slider"><Slider 
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={onChange}/>
                </div>
                </div>
            </header>
        )
    }
}

export default NavBar
