const express = require('express')

class Server {
    constructor () {
        this.application = express();

        this.setViewEngines(this.application);
        this.setRoutes(this.application);
    }

    setViewEngines(application) {
        application.set('view engine', 'pug');
    }

    setRoutes(application) {
        application.get('/', function (request, respone) {
            respone.render('index', { title: 'Server', environment: process.env.NODE_ENV});
        })
    }

    start() {
        const { PORT: port } = process.env;

        this.application.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    }
}

module.exports = Server;