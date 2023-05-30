import { fetchGameDetails } from "network/";
import { useQuery } from "react-query";
import { GameDetailsParams } from "types/GameDetailsType";

export const GAME_DETAILS_QUERY = "game.details";

/**
 *
 * @param params (optional) {
    gameId?: string;
   }
 * @description optional "gameId" will be passed to fetch game details.
 * @returns Query Result (UseQueryResult)
 * 
 */
export const useGameDetailsQuery = (params: GameDetailsParams) => {
  return useQuery
  ([GAME_DETAILS_QUERY, params], () => {
    return fetchGameDetails(params);
  }, 
  {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 0,
  });
};
