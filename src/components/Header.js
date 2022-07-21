import React, {useState} from "react";

const Header = ({onDarkModeClick, checkMode}) => {

    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {console.log(checkMode)}
                {checkMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;