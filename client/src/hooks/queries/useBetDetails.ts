
import { useQuery } from "react-query";
import { BetDetailsParams } from "types/BetDetails";

import { fetchBetDetails } from "network/";

export const BET_DETAILS_QUERY = "bet.details";

export const useBetDetailsQuery = (params: BetDetailsParams) => {
  return useQuery
  ([BET_DETAILS_QUERY, params], async () => {
    return fetchBetDetails(params);
  }, 
  {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 0,
  });
};
