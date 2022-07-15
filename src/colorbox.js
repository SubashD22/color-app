import React, { Component } from "react";
import './colorbox.css'
import {CopyToClipboard} from "react-copy-to-clipboard"


class ColorBox extends Component{
    constructor(props){
        super(props);
        this.state={copied: false};
        this.handleCopy = this.handleCopy.bind(this);
    }
    handleCopy(){
        this.setState({copied:true}, ()=>{
            setTimeout(()=>this.setState({copied:false}),1500)
        })
    }
    render(){
        const {background,name} = this.props
        return(
            <CopyToClipboard text={background} onCopy=
            {this.handleCopy}>
            <div style={{background}} className="colorbox">
             <div className={`copy-scale ${this.state.copied && "show"}`} style={{background}}/>
             <div className={`copy-msg ${this.state.copied && "show"}`}>
                <h1>COPIED</h1>
                <p>{background}</p>
             </div>
                <div className="Copy-container">
                    <div className="copy-btn">COPY</div>
                    <div className="clr-name">{name}</div>
                    <div className="more-btn">MORE</div>
                </div>
            </div>
            </CopyToClipboard>
        )
    }
};

export default ColorBox