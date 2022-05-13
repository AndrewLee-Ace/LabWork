import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

function UpdateCars() {

    const {id} = useParams()
    const [data, setData] = useState(null)
    console.log(data)

    const handleSubmitOwner = async (e) => {
        e.preventDefault()
        const info = await axios.put("http://localhost:4000/api/data/post/:num/:val", {update: [{ id: id, name: e.target[0].value }] })
        setData(info)
        e.target[0].value = ""
        e.target[1].value = ""
    }
    

    return (
        <div>
            <div>
                <h2>Update this car's Owner! :</h2>
                <form onSubmit={(event) => handleSubmitOwner(event)}>
                    <input placeholder1={"Enter Player ID to update Here"}/>
                    <input placeholder2={"Enter New Player Team Here"} />
                </form>
            </div>
            
            {data &&

            data.status === 200 ?
                <h1>SUCCESS!</h1> : <h1>PRESS ENTER AFTER FILLING EACH BOX</h1>}
        </div>
    )
}

export default UpdatePlayers;