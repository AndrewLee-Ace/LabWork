import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>FIFA 2021 PLAYERS LIST</h1>
            <ul>
                <li><Link to="api/data/all">View Players</Link></li>
                <li><Link to="api/data/new/">Create Player</Link></li>
            </ul>
        </div>
    )
}

export default Home;