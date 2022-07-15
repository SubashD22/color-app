import React,{Component} from "react";
import ColorBox from "./colorbox";
import './palette.css';
import NavBar from "./navbar";


class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level:500};
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(level){
        this.setState({level})
    }
    render(){
        const {colors}= this.props.palettes
        const {level}=this.state
        const colorboxes = colors[level].map(color =>(<ColorBox background={color.hex} name={color.name}/>))
        return(
            <div className="palette">
                <NavBar level={this.state.level} onChange={this.handleChange}/>
                <div className="palette-colors">
                    {colorboxes}
                </div>
            </div>
        )
    }
}

export default Palette