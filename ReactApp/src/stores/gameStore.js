import io from 'socket.io-client';
import {observable} from 'mobx';

const SERVICE_URL = process.env.SERVICE_URL ?
    process.env.SERVICE_URL.trim()
    : 'http://localhost:3333';
    
class GameStore {
    @observable games = [];
    
    connect() {
        this.socket = io(SERVICE_URL);
        
        this.socket.on('games', games => {
			this.games.replace(games);
		});
    }

    startGame(name) {
        this.socket.emit('startGame', name);
    }

    playGame(name) {
        this.socket.emit('playGame', name);
    }

    clickTile(name, i, j) {
        this.socket.emit('clickTile', {name, i, j});
    }

};
export default new GameStore();