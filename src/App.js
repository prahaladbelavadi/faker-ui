import logo from './logo.svg';
import './App.css';
import Generator from './components/Generator';
import Collection from './components/Collection';

function App() {
  return (
    <div className="App">
      <Collection/>
      <Generator/>
    </div> 
  );
}

export default App;
