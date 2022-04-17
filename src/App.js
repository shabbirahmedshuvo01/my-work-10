import './App.css';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
