import "./nav.css"
import img1 from "./HZlogo.png"
import { Link } from "react-router-dom";


export default function NavBar() {
    return (
        <div className="navBar-div">
            <img src={img1} alt="logo"/>
            <div className="navMid">
                <Link to="./">Sale</Link>
                <Link to="./earphone">Earphones </Link>
                <Link to="./headphone">Headphone</Link>
                <Link to="./price">Price</Link>
                <Link to="./deals">Deals</Link>
                <Link to="./finder">Headphone finder</Link>
                <Link to="./events">Events</Link>
                <Link to="./forums">Forums</Link>
                <Link to="./info">Info</Link>
                <Link to="./help">Help center</Link>
            </div>
            <div className="navMid">
                <Link to="./search">Search</Link>
                <Link to="./login">Login</Link>
                <Link to="./cart">Cart</Link>
            </div>

        </div>
    )
}