import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send({ message: 'Hello World!' });
}
);

app.get('/marvel/', (req, res) => {
    res.json([
            {
            "title": "Captain America: The First Avenger",
            "release_order": 5,
            "chronological_order": 1,
            "released": "2011",
            "type": "movie",
            "color": "#0b2657",
            "disney": "https://www.disneyplus.com/movies/captain-america-the-first-avenger/6xvB6xZ4r95O", 
            "amazon": "https://www.amazon.com/Captain-America-Avenger-Chris-Evans/dp/B005PW3OS8", 
            "apple": "https://tv.apple.com/us/movie/captain-america-the-first-avenger/umc.cmc.621ts42h8b35wrzkmdlqiozsw"
            },
            {
            "title": "Marvel's Agent Carter",
            "release_order": 12,
            "chronological_order": 2,
            "released": "2015",
            "type": "tv",
            "color": "#e1222a",
            "disney": "https://www.disneyplus.com/series/agent-carter/3rh3uclvsNsT", 
            "amazon": "https://www.amazon.com/Marvels-Agent-Carter-Season-1/dp/B00RWAO4NU", 
            "apple": "https://tv.apple.com/ai/show/agent-carter/umc.cmc.1ex9ewntv8b99x3cfxjd3q458"
            },
            {
            "title": "Captain Marvel",
            "release_order": 30,
            "chronological_order": 3,
            "released": "2019",
            "type": "movie",
            "color": "#b6826f",
            "disney": "https://www.disneyplus.com/movies/marvel-studios-captain-marvel/38xJGlLAQy9a", 
            "amazon": "https://www.amazon.com/Marvel-Studios-Captain-Brie-Larson/dp/B07P68DTRW", 
            "apple": "https://tv.apple.com/us/movie/captain-marvel/umc.cmc.3o1o52plk3pxcpvhfhdrzrsun"
            }
        ]
        );
}
);

app.post('/', (req, res) => {
   console.log(req.body); 
   res.send({ message: 'post received' });
}
);

export const start = () => {
    app.listen(3000, () => {
    // app.listen(5000, () => {
        console.log('Server is listening on port 3000');
        // console.log('Server is listening on port 5000');
    })
}