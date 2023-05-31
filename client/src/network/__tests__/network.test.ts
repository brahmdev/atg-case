import { BETTING_PRODUCT_MOCK } from "mocks/utils/mockBettingProductInfo";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";

import { fetchBetDetails, fetchGameDetails } from "../";

const unMockedFetch = global.fetch;

describe("test network calls", () => {
  afterAll(() => {
    jest.resetAllMocks();
    global.fetch = unMockedFetch;
  });

  it("calls fetch request when betType params is present while fetching BetDetails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve(BETTING_PRODUCT_MOCK),
      })
    ) as jest.Mock;
    const response = await fetchBetDetails({ betType: "V75" });
    expect(response).toEqual(BETTING_PRODUCT_MOCK);
  });

  it("calls fetch request when betType params is present while fetching GameDetails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve(GAME_INFO_MOCK),
      })
    ) as jest.Mock;
    const response = await fetchGameDetails({ gameId: "V75_2023-05-27_5_5" });
    expect(response).toEqual(GAME_INFO_MOCK);
  });

  it("throws error when API call fails", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 500,
        statusText: "Internal Server Error",
      })
    ) as jest.Mock;
    try {
      await fetchGameDetails({ gameId: "V75_2023-05-27_5_5" });
    } catch (error: Error | unknown) {
      expect((error as Error).message).toEqual("Internal Server Error");
    }
  });
});
