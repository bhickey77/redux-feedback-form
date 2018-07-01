const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const pool = require('./modules/pool');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.post('/', (req, res) => {
    const feedback = req.body;
    console.log(feedback);
    const queryText =  `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                        VALUES ($1, $2, $3, $4);`;
    pool.query(queryText,
        [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
        .then(result => {
            console.log(`back from the server: `, result);
            res.sendStatus(200);
        })
        .catch(error => {
            console.log(`error with the server: `, error);
            res.sendStatus(500);
        })
})

app.get('/admin', (req, res) => {
    const queryText =   `SELECT * FROM feedback;`;
    pool.query(queryText)
        .then(result => {
            console.log(`back from the sever with: `, result.rows);
            res.send(result.rows);
        })
        .catch(error => {
            console.log(`error with the server: `, error);
            res.sendStatus(500);
        })
})

/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});