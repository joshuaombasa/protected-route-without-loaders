import React from "react";
import { redirect } from "react-router-dom";

export  function loader() {
    const isLoggedIn = true
    if (!isLoggedIn) {
        throw redirect("/login")
    } else {
        return null
    }
}

export default function User() {
    return (
        <div className="container">
            <h1>This is user private data</h1>
        </div>
    )
}