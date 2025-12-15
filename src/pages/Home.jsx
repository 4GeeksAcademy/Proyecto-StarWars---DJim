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
			payload: { character: todosPersonajes }
		})


	}

	async function planets() {

		const response = await fetch("https://www.swapi.tech/api/planets/")

		const data = await response.json()
		const planetasExistentes = data.results;
		dispatch({
			type: "get_planets",
			payload: { planets: planetasExistentes }
		})


	}

	async function ships() {

		const response = await fetch("https://www.swapi.tech/api/starships/")
		const data = await response.json()
		const navesExistentes = data.results;
		
		dispatch({
			type: "get_ships",
			payload: { ships: navesExistentes }
		})


	}



	useEffect(() => {
		character()
		planets()
		ships()
	}, [])



	return (
		<div className="text-start mt-5">
			<h1 className="fw-bold text-center">Que la Fuerza Este Contigo </h1>
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
				{store.planets.map((value, index) => {

					return (

						<CardPlanets key={index} planets={value}/>
					)
				})}

				</div>

			</div>
		

		<h2 className="text-danger"> StarShips </h2>
			<div className="container py-2 overflow-auto">
				<div className="d-flex flex-row flex-nowrap">
				{store.ships.map((value, index) => {

					return (

						<CardShips key={index} ships={value}/>
					)
				})}

				</div>

			</div>

	</div>
		
	);
};
			
			
			

			
					
					
					
				
			

		



		
	
