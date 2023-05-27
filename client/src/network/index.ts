import { BetDetails, BetDetailsParams } from "types/BetDetails";

const fetchRequest = async (url: string, options?: RequestInit | undefined): Promise<Response> => {
  return await fetch(url, {
    ...options,
    redirect: "manual",
  });
};
export const fetchBetDetails = async (params: BetDetailsParams) => {
  const response = await fetchRequest(`/betDetails/${params.betType}`);
  
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
 
  return data as BetDetails;
};