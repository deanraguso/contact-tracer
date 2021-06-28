import './App.css';
import Form from './components/Form';
import History from './components/History';
import {useState, useEffect} from "react"



function App(props) {

  // Initialize to local data
  let prev = JSON.parse(sessionStorage.getItem("contact-tracer-data"));
  prev = prev ? prev : [];
  let [data, setData] = useState(prev);
  useEffect(()=>{
    sessionStorage.setItem("contact-tracer-data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Contact Tracing</h1>

      <Form data={data} setData={setData}></Form>
      <History data={data}></History>

    </div>
  );
}

export default App;
