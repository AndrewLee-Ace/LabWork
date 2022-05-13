import React, {useState} from "react";
import axios from "axios";

function AddPlayers() {

    const [data, setData] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        let obj = {
            add : [{
                id: event.target[0].value,
                name: event.target[1].value,
                nationaliy: event.target[2].value,
                position: event.target[3].value,
                overall: event.target[4].value,
                age: event.target[5].value,
                hits: event.target[6].value,
                potential: event.target[7].value,
                team: event.target[8].value
            }]
        }
        
        const info = await axios.post("http://localhost:4000/api/data/new/", obj)
        setData(info)
        event.target[0].value = ""
        event.target[1].value = ""
        event.target[2].value = ""
        event.target[3].value = ""
        event.target[4].value = ""
        event.target[5].value = ""
        event.target[6].value = ""
        event.target[7].value = ""
        event.target[8].value = ""

    }

    return (
        <div>
            <h1>Add a Player :</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input placeholder={"Enter Player ID Here"}/>
                <input placeholder={"Enter Player Name Here"}/>
                <input placeholder={"Enter Player Nationality Here"}/>
                <input placeholder={"Enter Player Position Here"}/>
                <input placeholder={"Enter Player Overall Here"}/>
                <input placeholder={"Enter Player Age Here"}/>
                <input placeholder={"Enter Player Hits Here"}/>
                <input placeholder={"Enter Player Potential Here"}/>
                <input placeholder={"Enter Player Team Here"}/>
                <button type="submit" value="Submit">Submit</button>
            </form>
            {data && <div>{data.status}</div>}
        </div>
    )
}

export default AddPlayers;