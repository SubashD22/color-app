import React, { Component } from 'react';
import Palette from './palette';
import PaletteList from './paletteList';
import seedpallets from './seedpallets';
import {generatePalette} from "./colorhelper";
import { Route, Switch, useParams } from 'react-router-dom';

class App extends Component{
  findPalette(id){
    
    return seedpallets.find(function(palette){
      return palette.id === id 
    })
  }
  render(){
  console.log(generatePalette(seedpallets[4]))
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={()=><PaletteList palettes={seedpallets}/>}/>
        <Route exact path='/palette/:id' 
          render={routeProps =>(<Palette
          palettes={generatePalette(this.findPalette(routeProps.match.params.id))}/>)}
        />
      </Switch>
    </div>
  );
}
}

export default App;
