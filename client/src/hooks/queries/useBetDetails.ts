
import { fetchBetDetails } from "network/";
import { useQuery } from "react-query";
import { BetDetailsParams } from "types/BetDetailsType";

export const BET_DETAILS_QUERY = "bet.details";

export const useBetDetailsQuery = (params: BetDetailsParams) => {
  return useQuery([BET_DETAILS_QUERY, params], () => {
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
