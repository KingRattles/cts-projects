import React from "react";

const Header = (title) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <p>Fill out the fields below and click generate to see the Madlibs story.</p>
        </div>
    )
}

export default Header;