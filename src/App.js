import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import About from './components/about';
import Stack from './components/stack';
import Stack2 from './components/stack2';
import Block from './components/block';
import Deploy from './components/deploy';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <Navbar/>
      <About/>
      <Stack/>
      <Stack2/>
      <Block/>
      <Deploy/>
      <Footer/>
    </div>
  );
}

export default App;
