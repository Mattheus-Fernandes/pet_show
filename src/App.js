import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import VideoBg from './components/VideoBg';
import Registered from './components/Registered';

function App() {


  return (
    <div className="App">
      <Navbar />      
      <VideoBg />
      <Form />
      <Registered />     
    </div>
  );
}

export default App;
