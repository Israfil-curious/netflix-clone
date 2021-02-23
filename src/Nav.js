import React, { useEffect, useState } from 'react';
import "./Nav.css"

const Nav = ({setDark, dark}) => {
    
    const [show, handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 50) {
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}> 
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" 
                alt="netflix-logo"
            />
            <button className="light_dark_button" onClick={setDark}>{dark? "Dark" : "Light"}</button>
            <img 
                className="nav_avatar"
                src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-finder-icon.png" 
                alt="netflix-avatar"
            />
        </div>
    );
};

export default Nav;