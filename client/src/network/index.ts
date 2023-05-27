import { BetDetails, BetDetailsParams } from "types/BetDetails";

async function fetchRequest (url: string, options?: RequestInit | undefined): Promise<Response> {
  return await fetch(url, {
    ...options,
    mode: "no-cors",
  });
}

export const fetchBetDetails = async (params: BetDetailsParams) => {    
  const response = await fetchRequest(`/betDetails/${params.betType}`);
  console.log("RESPONSE ", response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
   
  return data as BetDetails;
};