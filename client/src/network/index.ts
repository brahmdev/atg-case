import { BetDetails, BetDetailsParams } from "src/types/BetDetailsType";
import { GameDetailsType, GameDetailsParams } from "src/types/GameDetailsType";

async function fetchRequest (url: string, options?: RequestInit | undefined): Promise<BetDetails | GameDetailsType | Error> {
  const response = await fetch(url, {
    ...options,
    mode: "no-cors",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const fetchBetDetails = async (params: BetDetailsParams) => {
  return await fetchRequest(`/betDetails/${params.betType}`) as BetDetails;
};

export const fetchGameDetails = async (params: GameDetailsParams) => {
  return await fetchRequest(`/gameDetails/${params.gameId}`) as GameDetailsType;
};