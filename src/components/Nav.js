import React from "react";
import page_logo from "../images/littlelemon_logo.png"
import { Link } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <img src={page_logo} alt="Little Lemon" ></img>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
                <Link to="/menu"><li>Menu</li></Link>
                <Link to="/reservations"><li>Reservations</li></Link>
                <Link to="/orderonline"><li>Order Online</li></Link>
                <Link to="/login"><li>Login</li></Link>

            </ul>
        </nav>
    )
}

export default Nav;