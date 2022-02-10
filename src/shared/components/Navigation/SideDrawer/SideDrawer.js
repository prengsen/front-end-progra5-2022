import React from "react";
import ReactDOM from "react-dom";
import {CSSTransition} from 'react-transition-group';

import './SideDrawer.css';

const SideDrawer = (props) =>{
    const content =
        <CSSTransition
            in={props.show}
            timeout={300}
            mountOnEnter
            unmountOnExit
            classNames="side-in-left"    
        >
            <aside className="side-drawer">
                {props.children}
            </aside>
        </CSSTransition>;


    return(
        ReactDOM.createPortal(content, 
            document.querySelector("#drawer-container"))
    );
}

export default SideDrawer;