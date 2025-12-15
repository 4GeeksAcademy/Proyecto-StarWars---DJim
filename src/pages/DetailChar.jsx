import { Link, useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailChar = () => {
    const { uid } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({birth_year:"", eye_color:"", gender:"", hair_color:"", height:"", homeworld:"", mass: "", 
        name:"", skin_color:"", created: "", edited: "", species:"", starships:"", url: "", vehicles: "",
    })

    function detailChar() {
        fetch(`https://www.swapi.tech/api/people/${uid}`, {
          
    })
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))
}
    useEffect(() => {
        detailChar()
    }, [uid])



    return (
        <div className="card" style={{ width: "600px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="Character" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-2">{character.name}</h5>
                        <p className="card-text"><span className="fw-normal">Birth Year: </span>{character.birth_year}</p>
                        <p className="card-text"><span className="fw-normal">Eye Color: </span>{character.eye_color}</p>
                        <p className="card-text"><span className="fw-normal">Gender: </span>{character.gender}</p>
                        <p className="card-text"><span className="fw-normal">Hair Color: </span>{character.hair_color}</p>
                        <p className="card-text"><span className="fw-normal">Height: </span>{character.height}</p>
                        <p className="card-text"><span className="fw-normal">Skin Color: </span>{character.skin_color}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};