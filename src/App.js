import './App.css';
import Slider from './pages/HomepageBody/slider';
import NavBar from './pages/navbar/navbar';
import Product from './pages/HomepageBody/productGrid';
import Productsslider from './pages/HomepageBody/productslider1';
import Router from './pages/allroutes';
import Body from './pages/HomepageBody/Body';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      {/* <Body/> */}
      {/* <Body/> */}
      {/* <Categories/> */}
    </div>
  );
}

export default App;
