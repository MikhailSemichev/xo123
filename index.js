let express = require('express');
let http = require('http');
let app = express();
let server = http.createServer(app);

let bodyParser = require('body-parser');
let cors = require('cors');
let noCache = require('./noCache');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());
app.use(noCache);

app.use(express.static('www'));

///

app.get('/', (req, res) => {
	res.send('Hello world');
});

///

require('./ajaxService')(app); 
require('./webSocketServer')(app); 
app.io.attach(server);

///
let port = process.env.PORT || 3333;
server.listen(port);
console.log('Listening at:' + port);
