import React,{Component} from "react";
import ColorBox from "./colorbox";
import './palette.css';
import NavBar from "./navbar";



class Palette extends Component{
    constructor(props){
        super(props);
        this.state={level:500, format:"hex"};
        this.handleChange= this.handleChange.bind(this);
        this.changeformat = this.changeformat.bind(this)
    }
    changeformat(val){
        this.setState({format: val})
    }
    handleChange(level){
        this.setState({level})
    }
    render(){
        const {colors,paletteName,emoji}= this.props.palettes
        const {level,format}=this.state
        const colorboxes = colors[level].map(color =>(<ColorBox background={color[format]} key={color.id} name={color.name}/>))
        return(
            <div className="palette">
                <NavBar level={this.state.level} onChange={this.handleChange} handleslider={this.changeformat}/>
                <div className="palette-colors">
                    {colorboxes}
                </div>
                <footer>
                    {paletteName}
                    <span className="emoji">{emoji}</span>
                </footer>
            </div>
        )
    }
}

export default Palette