import logo from './logo.svg';
import './App.css';
import Side_bar from "./Component/Side_bar/Side_bar"
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Side_bar/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
