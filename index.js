const Express = require('express');
const sequelize = require('./db');
const router = require('./routes/router');
const bodyParser = require('body-parser');

const app = Express();
const port = 3001;

sequelize.sync().then(res => {
    console.log('db connection established');
}).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use('/api/v1', router);