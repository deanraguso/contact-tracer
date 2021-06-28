import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import History from './components/History';
import {useState} from "react"


function App(props) {

  // Initialize to local data
  let [data, setData] = useState([{}]);

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Contact Tracing</h1>

      <Form></Form>
      <History data={data} setData={setData}></History>

    </div>
  );
}

export default App;
