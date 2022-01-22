import express, { json } from "express"
import cors from 'cors'

const app = express()
app.use(cors())
app.use(json())

let user

let tweets = [
	{
		username: "bobesponja",
		avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info",
	    tweet: "eu amo o hub"
	}
]

app.post("/sign-up", (req, res) => {
    user = req.body 

    const regEx = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/
    const isImage = regEx.test(user.avatar)
   
    if (!user.username) {
        res.status(400).json("Nome em branco")
    }
    if ( !isImage ) {
        res.status(400).json("Formato da imagem não aceito")
    }

    res.send("OK")
});

app.get("/tweets", (req, res) => {
    res.send(tweets)
});

app.post("/tweets", (req, res) => {
    const tweet = req.body

    if (!tweet.tweet) {
        res.status(400).json("Mensagem em branco")
    }

    tweet.avatar = user.avatar

    if (tweets.length === 10) {
        tweets.shift()
    }
    
    tweets.push(tweet)
    res.send("OK")
});

app.listen(5000)