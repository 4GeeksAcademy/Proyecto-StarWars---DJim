import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<img width="50" height="50" src="https://img.icons8.com/ios/50/star-wars.png" alt="star-wars" />
				</Link>
				<div className="ml-auto">
					
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites ({store.favorites.lenght})
							</button>
							<ul className="dropdown-menu">
								{store.favorites.map((fav, index) => (
								<li key={index} className="d-flex justify-content-between align-items-center px-3">
									<span>{fav.name}</span>
									<button className="btn btn-sm btn-warning" onClick={() => dispatch({
										type: "remove_favorite", payload: { index }})}
									><i className="fas fa-trash"></i>
									</button>
								</li>
							))}
							</ul>
						</div>
				
				</div>
			</div>
		</nav>
	);
};