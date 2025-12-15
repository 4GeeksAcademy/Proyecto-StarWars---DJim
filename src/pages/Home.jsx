import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardCharacter from "../components/CardCharacter.jsx";
import CardPlanets from "../components/CardPlanets.jsx";
import CardShips from "../components/CardShips.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function character() {
		const response = await fetch("https://www.swapi.tech/api/people/")
		const data = await response.json()
		const todosPersonajes = data.results;
		dispatch({
			type: "get_characters",
			payload: { personajes: todosPersonajes }
		})


	}

	async function world() {

		const response = await fetch("https://www.swapi.tech/api/planets/")
		const data = await response.json()
		const planetasExistentes = data.results;
		dispatch({
			type: "get_planets",
			payload: { planetas: planetasExistentes }
		})


	}

	async function ships() {

		const response = await fetch("https://www.swapi.tech/api/starships/")
		const data = await response.json()
		const navesExistentes = data.results;
		
		dispatch({
			type: "get_ships",
			payload: { naves: navesExistentes }
		})


	}



	useEffect(() => {
		character()
		world()
		ships()
	}, [])



	return (
		<div className="text-center mt-5">
			<h1 className="fw-bold text-center"> Blog Starwars </h1>
			<h2 className="text-danger"> Characters </h2>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
				{store.character.map((value, index) => {

					return (

						<CardCharacter key={index} char={value} />
					)
				})}
				</div>

			</div>
		

		<h2 className="text-danger"> Planets </h2>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
				{store.world.map((value, index) => {

					return (

						<CardPlanets key={index} orb={value}/>
					)
				})}

				</div>

			</div>
		

		<h2 className="text-danger"> StarShips </h2>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
				{store.ships.map((value, index) => {

					return (

						<CardShips key={index} ship={value}/>
					)
				})}

				</div>

			</div>

	</div>
		
	);
};
			
			
			

			
					
					
					
				
			

		



		
	
