import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import History from './components/History';


function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Contact Tracing</h1>

      <Form></Form>
      <History></History>

    </div>
  );
}

export default App;
