import express from "express";
import { Request, Response } from "express";
import fetch from "node-fetch";

const PORT = process.env.PORT || 3001;

const app = express();

/**
 * This endpoint can be taken from enviroment config
 */
const RACING_INFO_API = "https://atg.se/services/racinginfo/v1/api";

app.get("/betDetails/:betType", async (req: Request, res: Response) => {
    const betType = req.params.betType;
    await fetchRequest(`${RACING_INFO_API}/products/${betType}`, res);
});

app.get("/gameDetails/:gameId", async (req, res) => {
    const gameId = req.params.gameId;
    await fetchRequest(`${RACING_INFO_API}/games/${gameId}`, res);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

async function fetchRequest(url: string, res: Response, method = "GET") {
    const response = await fetch(url, {
        method: method,
        headers: {
            Accept: "application/json",
        },
    });
    if (!response.ok) {
        throw new Error(response.statusText);
    }

    const responseJson = await response.json();
    res.json(responseJson);
}
