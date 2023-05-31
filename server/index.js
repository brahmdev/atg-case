var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import fetch from "node-fetch";
const PORT = process.env.PORT || 3001;
const app = express();
/**
 * This endpoint can be taken from enviroment config
 */
const RACING_INFO_API = "https://atg.se/services/racinginfo/v1/api";
app.get("/betDetails/:betType", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const betType = req.params.betType;
    yield fetchRequest(`${RACING_INFO_API}/products/${betType}`, res);
}));
app.get("/gameDetails/:gameId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = req.params.gameId;
    yield fetchRequest(`${RACING_INFO_API}/games/${gameId}`, res);
}));
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
function fetchRequest(url, res, method = "GET") {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: method,
            headers: {
                Accept: "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseJson = yield response.json();
        res.json(responseJson);
    });
}
