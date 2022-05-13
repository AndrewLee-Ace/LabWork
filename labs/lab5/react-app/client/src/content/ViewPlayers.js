import React, {useState} from "react";
import useGetOp from "./hooks/useGetOp";
import {Link} from "react-router-dom";

function ViewPlayers() {
    const [url, setURL] = useState("http://localhost:4000/api/data/")
    const [isSingle, setIsSingle] = useState(false)
    const players = useGetOp(url)

   
    const handleSubmitID = (e) => {
        e.preventDefault()
        setURL(`http://localhost:4000/api/data/${e.target[0].value}`)
        e.target[0].value = ""
        setIsSingle(true)
    }

    const handleClick = (ID) => {
        if (!ID) setIsSingle(false)
        else setIsSingle(true)
        setURL(`http://localhost:4000/api/data/${ID}`)
    }

    return (
        <div>
            <div>
                <h2>Choose a player based on ID :</h2>
                <form onSubmit={(event) => handleSubmitID(event)}>
                    <input placeholder={"Enter Player ID Here"}/>
                </form>
            </div>
            <div>
                <h3>Car(s) :</h3>
                <div className="car-container">
                    {players && players.data.map(player => {
                        return (
                            <button className="players" key={player.player_id} onClick={() => handleClick(player.player_id)}>
                                <h3>{player.id} {player.name} {player.age}/</h3>
                                {isSingle &&
                                    <div>
                                        <p><strong>Position : </strong>{player.position} <br/><strong> Team : </strong>{player.team}</p>
                                        <p><strong>Potential : </strong>{player.potential}</p>
                                        <Link to={`/api/data/post/${player.car_id}/`}><strong>UPDATE</strong></Link>
                                    </div>
                                }
                            </button>
                        )
                    })}
                </div>
                <button onClick={() => handleClick('')}>All Players</button>
            </div>
        </div>
    )
}

export default ViewPlayers;