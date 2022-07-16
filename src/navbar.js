import React, { Component } from "react";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './navbar.css';
import { Select, MenuItem, Button, Snackbar, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {format:"hex",open:false};
        this.handlechange = this.handlechange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }
    handlechange(e){
        this.setState({format:e.target.value,open:true},()=>{
            setTimeout(()=>this.setState({open:false}),3000)
        });
        this.props.handleslider(e.target.value)
    };
    closeSnackbar(e){
        this.setState({open:false})
    }

    render(){
        const{level,onChange} = this.props
        return(
            <header className="navbar">
                <div className="logo">
                 <Link to='/'>Color Picker</Link> 
                </div>
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
                <div className="select-comp">
                    <Select value={this.state.format} onChange={this.handlechange}>
                    <MenuItem value="hex">#fff</MenuItem>
                    <MenuItem value="rgb">rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                anchorOrigin={{vertical:"bottom", horizontal:"left"}}
                open={this.state.open}
                autoHideDuration={3000}
                message={<span id="message-id">Format changed to {this.state.format}</span>}
                ContentProps={{
                    "aria-describedby":"message-id"
                }}
                action={[
                    <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                        <CloseIcon />
                    </IconButton>
                ]} />
            </header>
        )
    }
}

export default NavBar
