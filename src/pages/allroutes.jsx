import { Route, Routes } from "react-router-dom";
import Brand from "../components/brand";
import Cart from "../components/cart";
import Categories from "../components/categories";
import Deals from "../components/deals";
import Events from "../components/events";
import Finder from "../components/finder";
import Login from "../components/login";
import Price from "../components/price";
import Sale from "../components/sale"
import Search from "../components/search";
import Body from "./HomepageBody/Body";


export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/categories" element={<Categories/>} />
            <Route path="/brand" element={<Brand/>} />    
            <Route path="/price" element={<Price/>} />    
            <Route path="/deals" element={<Deals/>} />    
            <Route path="/finder" element={<Finder/>} />    
            <Route path="/event" element={<Events/>} />    
            <Route path="/search" element={<Search/> } />    
            <Route path="/login" element={<Login/>} />    
            <Route path="/cart" element={<Cart/>} />    

        </Routes>
        )
}