import React from 'react'
import './css/navbar.css'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import {useState} from 'react';

import {
    AddressBookSolid,
    AddressCardSolid,
    LaptopCodeSolid,
    LaptopHouseSolid,
    ArrowDown,
    ReactIcon
} from '../images/iconComponents/index';





function NavBar () {
 


    return (
        
            <Navbar>
                <NavItem to="/" text="Home" icon={<LaptopHouseSolid/>} />
                <NavItem to="/about" text="About" icon={<AddressCardSolid/>} />
                <NavItem to="/projects" text="Projects" icon={<LaptopCodeSolid/>} more={<ArrowDown height='1rem' width='auto' margin='0 auto'/>} >
                    <DropdownMenuProjects to='/Projects/React' text="React"  icon={<ReactIcon/>}/>
                </NavItem>
                <NavItem to="/contact" text="Contact Me" icon={<AddressBookSolid/>} />
            </Navbar>
        
    )
}



function Navbar(props) {
    return (
        <nav className="navbar" >
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    )
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    
    return (
        <React.Fragment>
            <li className="nav-item" onClick={()=> setOpen(!open)}>
                <Link to={props.to} className="nav-link">
                    {props.icon}
                    <span className="link-text">{props.text} <div>{props.more}</div></span>
                </Link>
            </li>
            {open && props.children}
        </React.Fragment>
      );
}

function DropdownMenuProjects(props) {

    return (
        <li className="nav-item dropdown" >
            <Link to={props.to} className="nav-link">
                {props.icon}
                <span className="link-text">{props.text}</span>
            </Link>
        </li>
    )

}



export default NavBar
