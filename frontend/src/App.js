import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [message, setMessage] = useState('');
  const handleChange = e => setMessage(e.target.value);
  return (
    <div className="App">
      <form className="App-header">
        <label>
          <input className="App-input" type="text" placeholder="Enter any message" value={message} onChange={handleChange} />
        </label>
        <input className="App-submit" type="submit" value="Save"/>
      </form>
    </div>
  );
}

export default App;
