import React from "react";
import {Link} from "react-router-dom";

import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader";

const MainNavigation = (props) => {
    return(
        <MainHeader className="main-navigation__menu-btn">
            <button>
                <span />
                <span />
                <span />
            </button>

            <h1 className="main-navigation__title">
                <Link to="/"> Tus Sitios </Link>
            </h1>

            <nav>

            </nav>
        </MainHeader>
    );
}

export default MainNavigation;