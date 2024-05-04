const express = require('express');
const app = express()

const port = 4000;
const vercelpaths = require("./vercel.json");

//Updating the task

vercelpaths.rewrites.map(d => {
    let dest = d.destination;
    if (dest === "/api") {
        dest = "/api/index"
    }
    app.get(d.source, require(`.${dest}.js`))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
