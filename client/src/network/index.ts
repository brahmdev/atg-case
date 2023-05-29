import { BetDetails, BetDetailsParams } from "types/BetDetailsType";
import { GameDetailsType, GameDetailsParams } from "types/GameDetailsType";

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
  return params.betType && await fetchRequest(`/betDetails/${params.betType}`) as BetDetails;
};

export const fetchGameDetails = async (params: GameDetailsParams) => {
  return params.gameId && await fetchRequest(`/gameDetails/${params.gameId}`) as GameDetailsType;
};