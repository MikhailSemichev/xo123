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
};
export default new GameStore();