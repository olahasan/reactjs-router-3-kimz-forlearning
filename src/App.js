import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
     <Header />
     <div style={{height:"93.9vh"}}> <Outlet/> </div>
     <Footer />
    </div>
  );
}

export default App;
