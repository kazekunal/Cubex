import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Stack from './components/stack'

function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
      <About/>
      <Stack/>
    </div>
  );
}

export default App;
