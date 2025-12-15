import { Link, useParams, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPlanet = () => {
    const { uid } = useParams();
    const navigate = useNavigate();
    const [planet, setPlanet] = useState({name:"", orbital_period:"", population:"", residents:"", climate:"", diameter:"", gravity:""})

    function detailPlanet() {
        fetch(`https://www.swapi.tech/api/planets/${uid}` , {

        })
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailPlanet()
    }, [uid])



    return (
        <div className="card" style={{ width: "600px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${uid}.jpg`} className="card-img-top" alt="Planets" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title fw-bold fs-2">{planet.name}</h5>
                        <p className="card-text"><span className="fw-normal">Orbital Period: </span>{planet.orbital_period}</p>
                        <p className="card-text"><span className="fw-normal">Population: </span>{planet.population}</p>
                        <p className="card-text"><span className="fw-normal">Residents: </span>{planet.residents}</p>
                        <p className="card-text"><span className="fw-normal">Climate: </span>{planet.climate}</p>
                        <p className="card-text"><span className="fw-normal">Diameter: </span>{planet.diameter}</p>
                        <p className="card-text"><span className="fw-normal">Gravity: </span>{planet.gravity}</p>
                    </div>
                </div>
            </div>
        </div>


            );
};