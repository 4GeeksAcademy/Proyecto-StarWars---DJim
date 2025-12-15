import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, {useState} from "react";



const CardPlanets = ({ orb }) => {
    const { store, dispatch } = useGlobalReducer()
    const isFav = store.favorites.some(f => f.name === orb.name);
    const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === orb.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
            dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: orb.name,
                        uid: orb.uid,
                        type: "planet"
                    }
                }
            });
        }
    };




    return (
        
            <div className="card mx-1" style={{ minWidth: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/planets/${orb.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {orb.name}</h5>
                    <Link to={`/planeta/${orb.uid}`} className="btn btn-success">Learn More </Link>
                    <button className={`btn ${isFav ? "btn btn-outline-danger" : "btn-warning"} ms-2`} onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                </div>
            </div>


   
        

    )

}

export default CardPlanets;