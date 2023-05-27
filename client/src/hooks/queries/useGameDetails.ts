
import { fetchGameDetails } from "network/";
import { useQuery } from "react-query";

import { GameDetailsParams } from "src/types/GameDetailsType";

export const GAME_DETAILS_QUERY = "game.details";

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
