import React from "react";

import '../Styles/style.css'

export default function App() {
    return (
        <div className="footer">
        <div><p> <span>© 2022 Copyright:</span> Marco Castellacci</p></div>
            <div>
                <img src={process.env.PUBLIC_URL + "/assets/TMDB-Logo.svg"} className="logo-tmdb" alt="Logo TMDB"/>
            </div>
        </div>
    );
}
