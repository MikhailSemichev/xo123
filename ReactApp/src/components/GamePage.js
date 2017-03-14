import React, {Component} from 'react';
import gameStore from '../stores/gameStore';
import { observer } from 'mobx-react';
import { hashHistory } from 'react-router';

@observer
class GamePage extends Component {
	onClick = (name, i, j) => {
		gameStore.clickCell(name, i, j);
	}

	render() {
		let name = this.props.params.name;
		let game = gameStore.games.find(g => g.name === name);

		if(!game) return null;

		return (
			<div className="start-page">
				<button onClick={hashHistory.goBack}> &lt;= BACK</button>
				
				<div className="cells">
					{game.cells.map((row, i) => (
						<div
							className="row" 
							key={i}>
							{row.map((cell, j) => (
								<div
									className="cell"
									key={j}
									onClick={() => this.onClick(name, i, j)}>
									{cell}
								</div>
							))}
						</div>
					))}
				</div>				
			</div>
		);
	}
}

export default GamePage;
