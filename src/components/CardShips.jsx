import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import React, {useState} from "react";



const CardShips = ({ship}) => {
const { store, dispatch } = useGlobalReducer()
const isFav = store.favorites.some(f => f.name === ship.name);
const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === ship.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: ship.name,
                        uid: ship.uid,
                        type: "ship"
                    }
                }
            });
        }
    };




    return (
        
            <div className="card mx-1" style={{ minWidth: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${ship.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"> Name: {ship.name}</h4>
                   <Link  to={`/nave/${ship.uid}`} className="btn btn-success">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-danger" : "btn-warning"} ms-2`} onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                    
                    
                </div>
            </div>
        
    )



}

export default CardShips;