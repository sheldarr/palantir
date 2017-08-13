const express = require('express')
const path = require('path');

class Server {
    constructor () {
        this.application = express();

        this.setViewEngines(this.application);
        this.setStaticContent(this.application);
        this.setRoutes(this.application);
    }

    setViewEngines(application) {
        application.set('view engine', 'pug');
    }

    setStaticContent(application) {
        application.use('/public', express.static(path.normalize(`${__dirname}/../public`)));
    }

    setRoutes(application) {
        application.get('/', function (request, respone) {
            respone.render('index', { title: 'Server', environment: process.env.NODE_ENV});
        });

        application.get('/examples/html', function (request, respone) {
            respone.sendFile(path.normalize(`${__dirname}/../examples/html.html`));
        });

        application.get('/examples/html-css', function (request, respone) {
            respone.sendFile(path.normalize(`${__dirname}/../examples/html-css.html`));
        });
    }

    start() {
        const { PORT: port } = process.env;

        this.application.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        })
    }
}

module.exports = Server;