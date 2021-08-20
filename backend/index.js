const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT | 3008;
const api = require('./routes/my_api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.status(419).json({ok: true, me: 'teapot'})
})

app.use('/api', api);

app.listen(port, () => {
    console.log("App listening from " + port);
})
