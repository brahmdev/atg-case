import { fetchBetDetails } from "network/";
import { useQuery } from "react-query";
import { BetDetailsParams } from "types/BetDetailsType";

export const BET_DETAILS_QUERY = "bet.details";

/**
 * 
 * @param params {
    betType: string; 
  }
 * @description mandatory betType passed to use betDetails. This will be either of "V75", "V86", "GS75" in this MVP.
 * @returns Query Result (UseQueryResult)
 * 
 */
export const useBetDetailsQuery = (params: BetDetailsParams) => {
  return useQuery(
    [BET_DETAILS_QUERY, params],
    () => {
      return fetchBetDetails(params);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      retry: false,
      staleTime: 0,
    }
  );
};
