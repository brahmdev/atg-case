import { BetDetails, BetDetailsParams } from "types/BetDetailsType";
import { GameDetailsType, GameDetailsParams } from "types/GameDetailsType";

async function fetchRequest(
  url: string,
  options?: RequestInit | undefined
): Promise<BetDetails | GameDetailsType | Error> {
  const response = await fetch(url, {
    ...options,
    mode: "no-cors",
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

/**
 * 
 * @param params {
    betType: string;
   }
 * @description mandatory betType passed to use betDetails. This will be either of "V75", "V86", "GS75" in this MVP.   
 * @returns Promise for BetDetails for successful response and Error for failed request
 * 
 */
export const fetchBetDetails = async (params: BetDetailsParams) => {
  return (
    params.betType &&
    ((await fetchRequest(`/betDetails/${params.betType}`)) as BetDetails)
  );
};

/**
 * 
 * @param params {
    gameId?: string;
   }
 * @description optional "gameId" will be passed to fetch game details.
 * @returns Promise for GameDetailsType for successful response and Error for failed request
 * 
 */
export const fetchGameDetails = async (params: GameDetailsParams) => {
  return (
    params.gameId &&
    ((await fetchRequest(`/gameDetails/${params.gameId}`)) as GameDetailsType)
  );
};
