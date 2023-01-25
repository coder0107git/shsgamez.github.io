import GameCard from "../components/GameCard";
import Starred from "../components/Starred";
import { Col, Container, Row } from "photoncss/lib/react";
import React from "react";
import games, { Game } from "../../games";

export const path = "/";

export default function View(): JSX.Element {
	return (
		<Container>

			<br/>

			<Row>

				<Starred/>

				<div className="title">
					<h3>Games</h3>
					<span className="badge" style={ { marginLeft: 16 } }>{ games.length } Game{ games.length === 1 ? "":"s" }</span>
				</div>

				<Col></Col>

				{ games
					.sort((a: Game, b: Game) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1)
					.map((game: Game, key: React.Key | null | undefined) => <GameCard game={ game } key={ key }/>) }

				<Col></Col>

			</Row>

		</Container>
	);
}
