import { log } from 'console';
import express from 'express';
import { appendFile } from 'fs';

let app = express();


app.get('/toto', function(req, res) {
    res.send('toto');
    console.log('toto');
});

app.get('/date', function(req, res) {
    res.send(`${new Date()}`)
})

app.get('/thomas', function(req, res) {
    const personne = {
        nom: "Laforge",
        prenom: "Thomas"
    }
    res.send(JSON.stringify(personne));
})

app.get('/files', function(req, res) {
    let createTotoFile = appendFile('toto.txt', 'toto', function (err) {
        if (err) throw err;
        console.log('toto.txt');
    })
    res.send(createTotoFile)
})

app.get('/random', function(req, res) {
    let randomNumber = Math.floor(Math.random()*100);
    res.send(randomNumber.toString());
})

app.post ('/randombetween/:min/:max', function (req, res) {
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);
    let randomNumberBetween = Math.floor(Math.random()*(max-min) + min);
    res.send(randomNumberBetween.toString());
})

app.get ('/simplon/logo', function (req, res) {
    res.sendFile(`https://simplon.co/images/logo.svg`)
})


app.use(express.static('public'))

app.get('/simplon/web', function (req, res) {
    res.send()
})

app.listen(3001, () => {
    console.log(`Example app listening on port ${3001}`)
  })