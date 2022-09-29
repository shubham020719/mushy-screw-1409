import './App.css';
import Slider from './pages/HomepageBody/slider';
import NavBar from './pages/navbar/navbar';
import Product from './pages/HomepageBody/productGrid';
import Productsslider from './pages/HomepageBody/productslider1';
import Router from './pages/allroutes';
import Body from './pages/HomepageBody/Body';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      {/* <Body/> */}
      {/* <Body/> */}
      
    </div>
  );
}

export default App;
