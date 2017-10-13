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
            respone.render('index', { title: 'JavaScript Frameworks Performance Benchamrk' });
        });

        application.get('/angular', function (request, respone) {
            respone.render('angular', { title: 'Angular implementation' });
        });

        application.get('/angular2', function (request, respone) {
            respone.render('angular2', { title: 'Angular 2 implementation' });
        });

        application.get('/mithril', function (request, respone) {
            respone.render('mithril', { title: 'Mithril.js implementation' });
        });


        application.get('/react', function (request, respone) {
            respone.render('react', { title: 'React implementation' });
        });
        
        application.get('/vue', function (request, respone) {
            respone.render('vue', { title: 'Vue.js implementation' });
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
            /*eslint no-console: 0*/
            console.log(`Server listening on port ${port}`);
        })
    }
}

module.exports = Server;