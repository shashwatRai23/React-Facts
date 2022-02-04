import React from "react";

export default function MainContent(props) {
    return (
        <main className={props.darkMode?"dark":""}>
            <h1 className="main--title">Fun Facts About React</h1>
            <ul className="main--facts">
                <li>Was First Released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers Thousands of enterprise apps ,including mobile apps</li>
            </ul>
        </main>
    )
}