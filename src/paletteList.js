import React,{Component} from "react";
import { Link } from "react-router-dom";

class PaletteList extends Component{
    render(){
        const {palettes} = this.props
        return(
            
            <div>
                <h1>Colors</h1>
                {palettes.map(p =>(<h1><Link
                to={`/palette/${p.id}`}>
                {p.paletteName}</Link></h1>))}
            </div>
            
        )
    } 
}

export default PaletteList