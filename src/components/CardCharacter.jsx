
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


const CardCharacter = ({ char }) => {
    const { store, dispatch } = useGlobalReducer()
    const isFav = store.favorites.some(f => f.name === char.name);
    const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === char.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: char.name,
                        uid: char.uid,
                        type: "character"
                    }
                }
            });
        }
    };
    
    




    return (
        <div className="card mx-1" style={{ minWidth: "18rem"}}>
                    <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${char.uid}.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <h5 className="card-title">Name:{char.name}</h5>
                    <Link to={`/personajes/${char.uid}`} className="btn btn-warning">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-warning" : "btn-secondary"} ms-2`}onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                </div>
        </div>



                
            


    )



}

export default CardCharacter;