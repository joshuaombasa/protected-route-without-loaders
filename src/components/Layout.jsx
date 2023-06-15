import React from "react";
import { NavLink, Outlet } from "react-router-dom";



export default function Layout() {

    const styles = {
        color : "red"
    }
    return (
        <>
        <nav>
            <NavLink 
                 to="/"
                 style={(isActive) => isActive ? styles : null}
            >Home</NavLink>
            <NavLink 
                 to="protected"
                 style={(isActive) => isActive ? styles : null}
            >User</NavLink> 
            <NavLink 
                 to="login"
                 style={(isActive) => isActive ? styles : null}
            >Login</NavLink>
        </nav>
        <Outlet/>
        </>
    )
}