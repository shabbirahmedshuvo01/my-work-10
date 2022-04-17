import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
    </div>
  );
}

export default App;
