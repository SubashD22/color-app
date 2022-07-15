import Palette from './palette';
import seedpallets from './seedpallets';

function App() {
  return (
    <div className="App">
      <Palette {...seedpallets[4]}/>
    </div>
  );
}

export default App;
