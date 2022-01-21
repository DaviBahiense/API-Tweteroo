import express, { json } from "express"
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())


let user
let tweet = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	  tweet: "eu amo o hub"
	}
]

app.post("/sign-up", (req, res) => {
    user = req.body 
    console.log(user)
    res.send("OK")
});

app.get("/tweets", (req, res) => {
    res.send(tweet)
});

app.listen(5000)