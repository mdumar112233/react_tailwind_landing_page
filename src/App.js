import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';
import UserCount from './components/UserCount/UserCount';
function App() {
  return (
    <>
     <div className=''>
        <Navbar /> 
        <Header />
        <Services />
        <About />
        <UserCount />
     </div>
    </>
  );
}

export default App;
