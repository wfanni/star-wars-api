const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios');

app.use("/static", express.static(path.join("../", "frontend", "build", "static")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./../frontend/build/index.html"));

})

app.get("/planets", async (req, res) => {
    console.log(req.query)

    if(req.query.page){
        let planets;
        await axios.get(`https://swapi.dev/api/planets/?page=${req.query.page}`)
            .then(function (response) {planets = response.data})
        res.send(JSON.stringify(planets))
    }

})

app.use(express.json())
app.post("/people", async (req, res) => {
    console.log(req.body);
    let people = {"people": []};
        for(residentLink of req.body.residents){
            await axios.get(residentLink).then(function (response) {
            people["people"].push(response.data)

        })}
    res.send(JSON.stringify(people))
 })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
