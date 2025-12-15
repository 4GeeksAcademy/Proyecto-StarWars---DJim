
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";


const CardShips = ({ships}) => {
const { store, dispatch } = useGlobalReducer()
const isFav = store.favorites.some(f => f.name === ships.name);
const toggleFavorite = () => {
        if (isFav) {
            const index = store.favorites.findIndex(f => f.name === ships.name);
            dispatch({
                type: "remove_favorite",
                payload: { index }
            });
        } else {
             dispatch({
                type: "add_favorite",
                payload: {
                    item: {
                        name: ships.name,
                        uid: ships.uid,
                        type: "ships"
                    }
                }
            });
        }
    };




    return (
        <div>
            <div className="card mx-1" style={{ minWidth: "18rem" }}>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/starships/${ships.uid}.jpg`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title"> {ships.name}</h4>
                   <Link  to={`/naves/${ships.uid}`} className="btn btn-warning">Learn More</Link>
                    <button className={`btn ${isFav ? "btn btn-outline-warning" : "btn-secondary"} ms-2`} onClick={toggleFavorite}>{isFav ? "♥" : "♡"}
                    </button>
                    
                    
                </div>
            </div>
        </div>
    )



}

export default CardShips;