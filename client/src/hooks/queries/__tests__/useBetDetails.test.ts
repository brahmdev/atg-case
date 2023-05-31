import { renderHook, waitFor } from "@testing-library/react";
import { BETTING_PRODUCT_MOCK } from "mocks/utils/mockBettingProductInfo";

import { hookWrapper } from "hooks/queries/__tests__/hooksUtils";
import { useBetDetailsQuery } from "hooks/queries/useBetDetails";

const unMockedFetch = global.fetch;

describe("useBetDetails", () => {
  afterAll(() => {
    jest.resetAllMocks();
    global.fetch = unMockedFetch;
  });

  it("returns response with a successful request", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 201,
        json: () => Promise.resolve(BETTING_PRODUCT_MOCK),
      })
    ) as jest.Mock;

    const { result } = renderHook(
      () => useBetDetailsQuery({ betType: "V75" }),
      { wrapper: hookWrapper }
    );
    await waitFor(() => expect(result.current.data).toBe(BETTING_PRODUCT_MOCK));
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
      () => useBetDetailsQuery({ betType: "V86" }),
      { wrapper: hookWrapper }
    );

    await waitFor(() => {
      expect(result.current.status).toBe("error");
    });
  });
});
