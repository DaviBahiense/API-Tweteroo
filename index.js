import express, { json } from "express"
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())


let user
let tweet

app.post("/sign-up", (req, res) => {
    user = req.body 
    console.log(user)
    res.send("OK")
});

app.get("/tweets", (req, res) => {

    res.send(user)
});

app.listen(5000)