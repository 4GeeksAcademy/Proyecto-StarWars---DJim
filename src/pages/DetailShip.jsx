import { Link, useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailShip = () => {
    const { uid } = useParams();
const navigate = useNavigate();
     const [ship, setShip] = useState({name:"", model:"", passengers:"", crew:"", manufacturer:"", length:"", starship_class:"", cargo_capacity: ""  
    })


    function detailShip() {
        fetch(`https://www.swapi.tech/api/starships/${uid}`, {
           
    })

            .then(res => res.json())
            .then(data => setShip(data.result.properties))
            .catch(err => console.error(err))
    }
    useEffect(() => {
        detailShip()
    }, [uid])



   return (
        <div className="card" style={{ width: "600px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${uid}.jpg`} className="card-img-top" alt="Ships" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-2">{ship.name}</h5>
                        <p className="card-text"><span className="fw-normal">Model: </span>{ship.model}</p>
                        <p className="card-text"><span className="fw-normal">Passengers: </span>{ship.passengers}</p>
                        <p className="card-text"><span className="fw-normal">Crew: </span>{ship.crew}</p>
                        <p className="card-text"><span className="fw-normal">Manufacturer: </span>{ship.manufacturer}</p>
                        <p className="card-text"><span className="fw-normal">Lenght: </span>{ship.length}</p>
                        <p className="card-text"><span className="fw-normal">Starship Class: </span>{ship.starship_class}</p>
                         <p className="card-text"><span className="fw-normal">Cargo Capacity: </span>{ship.cargo_capacity}</p>
                    </div>
                </div>
            </div>
        </div>

        
            );
};
