import React, {Component} from 'react';
import gameStore from '../stores/gameStore';
import { observer } from 'mobx-react';

@observer
class GamePage extends Component {
	onClick = (i, j) => {
		let name = this.props.params.name;
		gameStore.clickTile(name, i, j);
	}

	render() {
		let name = this.props.params.name;
		console.log(gameStore.games);
		let game = gameStore.games.find(g => g.name === name);

		if(!game) return null;

		return (
			<div className="start-page">
				Game "{name}"
				<table className="tiles">
					<tbody>
						{game.tiles.map((row, i) => (
							<tr key={i}>
								{row.map((col, j) => (
									<td key={j}
										className="cell"
										onClick={() => this.onClick(i, j)}>
										{col}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>				
			</div>
		);
	}
}

export default GamePage;
