import { renderHook, waitFor } from "@testing-library/react";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";

import { hookWrapper } from "hooks/queries/__tests__/hooksUtils";
import { useGameDetailsQuery } from "hooks/queries/useGameDetails";

const unMockedFetch = global.fetch;

describe("useGameDetails", () => {
  afterAll(() => {
    jest.resetAllMocks();
    global.fetch = unMockedFetch;
  });

  it("returns response with a successful request", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve(GAME_INFO_MOCK),
      })
    ) as jest.Mock;

    const { result } = renderHook(
      () => useGameDetailsQuery({ gameId: "V75_2023-05-27_5_5" }),
      { wrapper: hookWrapper }
    );
    await waitFor(() => expect(result.current.data).toBe(GAME_INFO_MOCK));
  });

  it("returns error response when request is rejected", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject({
        ok: false,
        status: 500,
      })
    ) as jest.Mock;

    /**
     * Provide the "betType" different than used in other test because react-query caches it with queryKey and betType value
     * so next time if same bet type value is used then we will get the response from cache instead of new mock
     */
    const { result } = renderHook(
      () => useGameDetailsQuery({ gameId: "V86_2023-05-27_5_5" }),
      { wrapper: hookWrapper }
    );

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });
  });
});
