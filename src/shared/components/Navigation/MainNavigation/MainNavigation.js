import React, {useState} from "react";
import {Link} from "react-router-dom";


import './MainNavigation.css';
import MainHeader from "../MainHeader/MainHeader.js";
import NavLinks from "../NavLinks/NavLinks.js";
import SideDrawer from "../SideDrawer/SideDrawer.js"
import Backdrop from "../../Backdrop/Backdrop.js";

const MainNavigation = (props) => {
    //manipulamos renderización del SideDrawer
    const [draweIsOpen, setDrawerIsOpen] = useState(false);

    const closeSideDrawer = () =>{
        setDrawerIsOpen(false);
    }

    const openSideDrawer = ()=>{
        setDrawerIsOpen(true);
    }

    return(
        <React.Fragment>
            {draweIsOpen? 
                (<Backdrop onClick={closeSideDrawer}/>):
                null}
            {draweIsOpen?
                (<SideDrawer>
                    <nav className="main-navigation__drawer-nav">
                        <NavLinks />
                    </nav>
                </SideDrawer>):
                null}

            <MainHeader >
                <button 
                    className="main-navigation__menu-btn"
                    onClick={openSideDrawer}>
                    <span />
                    <span />
                    <span />
                </button>

                <h1 className="main-navigation__title">
                    <Link to="/"> Tus Sitios </Link>
                </h1>

                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    );
}

export default MainNavigation;