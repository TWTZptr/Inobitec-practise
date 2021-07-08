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

app.use(bodyParser.json());
app.use('/api/v1', router);