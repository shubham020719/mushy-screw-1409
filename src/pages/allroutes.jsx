import { Route, Routes } from "react-router-dom";
import Brand from "../components/brand";
import Cart from "../components/cart";
import Categories from "../components/categories";
import CheckoutPage from "../components/checkout";
import Deals from "../components/deals";
import Dynamic from "../components/dyanmicpage";
import Events from "../components/events";
import Finder from "../components/finder";
import Login from "../components/login";
import PayemnetPage from "../components/payment";
import Price from "../components/price";
import Search from "../components/search";
import Body from "./HomepageBody/Body";


export default function Router() {
    return(
        <Routes>
            <Route path="/" element={<Body/>} />
            <Route path="/earphone" element={<Categories />} />
            <Route path="/earphone/:id" element={<Dynamic />} />
            <Route path="/headphone/:id" element={<Dynamic />} />
            <Route path="/headphone" element={<Brand/>} />    
            <Route path="/price" element={<Price/>} />    
            <Route path="/deals" element={<Deals/>} />    
            <Route path="/finder" element={<Finder/>} />    
            <Route path="/event" element={<Events/>} />    
            <Route path="/search" element={<Search/> } />    
            <Route path="/login" element={<Login/>} />    
            <Route path="/cart" element={<Cart/>} />    
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/PAymentPage" element={<PayemnetPage/> } />
        </Routes>
        )
}