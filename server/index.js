const express = require('express');
const bodyParser = require('body-parser');

const mc = require('./controllers/messages_ctrl')

const app = express();
app.use(bodyParser.json());


const messageBaseUrl = '/api/messages';
app.post(messageBaseUrl, mc.create);
app.get(messageBaseUrl, mc.read);
app.put(`${messageBaseUrl}/:id`, mc.update);
app.delete(`${messageBaseUrl}/:id`, mc.delete);







const port = 3001;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
});