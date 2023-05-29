import express from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/betDetails/:betType", async (req, res) => {
    const betType = req.params.betType;
    await fetchRequest(`https://atg.se/services/racinginfo/v1/api/products/${betType}`, res);
});

app.get("/gameDetails/:gameId", async (req, res) => {
    const gameId = req.params.gameId;
    await fetchRequest(`https://atg.se/services/racinginfo/v1/api/games/${gameId}`, res);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

async function fetchRequest (url, res, method = "GET",) {
    const response = await fetch(url, {
        method: method,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    res.json(responseJson);
}