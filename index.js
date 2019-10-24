'use strict'

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

const showMusicList = (req, res) => {
    res.status(200).send({
        list: [
            {music: "Destiny'sChild-LoseMyBreath"},
            {music: 'GirlOnFire-AliciaKeys'},
            {music: 'JoJo-Leave'},
            {music: 'Toxic-BritneySpears'},
            {music: 'YouBelongWithMe-TaylorSwift'}
        ]
    });
};

const selectMusic = (req, res) => {
    res.status(302).redirect(
        `http://localhost:40000/music/${req.params.musicId}.mp3`
    );
};

const selectBackground1 = (req, res) => {
    res.status(200).send({
        color: 547852
    });
};
const selectBackground2 = (req, res) => {
    res.status(200).send({
        color: 357456
    });
};

app.get("/musicList", showMusicList);
app.get("/selectMusic/:musicId", selectMusic);
app.get("/selectBadground1", selectBackground1);
app.get("/selectBadground2", selectBackground2);

const port= process.env.PORT || 40000

app.listen(port, () => {
    console.log("Listening server for port 40000");
});