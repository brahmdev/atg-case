
import express from 'express';
import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/betDetails/:betType", async (req, res) => {
    const betType = req.params.betType;
    const response = await fetch(`https://atg.se/services/racinginfo/v1/api/products/${betType}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    res.json(responseJson);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});