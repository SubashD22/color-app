import React, { Component } from 'react';
import Palette from './palette';
import seedpallets from './seedpallets';
import {generatePalette} from "./colorhelper";

class App extends Component{
  render(){
  console.log(generatePalette(seedpallets[4]))
  return (
    <div className="App">
      <Palette palettes={generatePalette(seedpallets[4])}/>
    </div>
  );
}
}

export default App;
