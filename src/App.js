import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import CheckOut from './component/CheckOut/CheckOut';
import Error from './component/Error/Error';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import MoreDetail from './component/MoreDetail/MoreDetail';
import Navbar from './component/Navbar/Navbar';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Services from './component/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<MoreDetail></MoreDetail>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
