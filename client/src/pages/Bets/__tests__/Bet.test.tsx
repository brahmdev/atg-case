import { fireEvent, screen, within } from "@testing-library/react";
import { BETTING_PRODUCT_MOCK } from "mocks/utils/mockBettingProductInfo";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";
import { MockReactQueryReturnValueType, renderWithClient } from "testUtils/utils/reactQueryUtils";

import { Bets } from "../Bets";


const mockBetReturnValue: MockReactQueryReturnValueType = { data: BETTING_PRODUCT_MOCK };
let mockBetLoadingState = false;

const mockGameReturnValue: MockReactQueryReturnValueType = { data: GAME_INFO_MOCK };
jest.resetAllMocks();

jest.mock("react-query", () => {
  return {
    ...jest.requireActual("react-query"),
    useQuery: (queryKey: string,) => {
      if (queryKey.includes("bet.details")) {
        return {
          ...mockBetReturnValue,
          isLoading: mockBetLoadingState,
        };
      } else if (queryKey.includes("game.details")) {
        return {
          ...mockGameReturnValue,
          isLoading: false,
        };
      }
    },
  };
});

describe("test BetDetails component", () => {
  it("renders the track name", () => {
    const rowsBeforeRender = screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    renderWithClient(<Bets />);
    
    expect(screen.getByTestId("track-container")).toHaveTextContent("Solvalla");
    const table = screen.getByRole("table");
    const raceName = within(table).getByRole("cell", { name: "Gränges - Lady Snärts lopp - STL Stoeliten, Försök 6 (Final Solvalla 26 december)" });
    expect(raceName).toBeVisible();
  });
  
  it("renders default bet type", () => {
    renderWithClient(<Bets />);
    expect(screen.getByText("V75")).toBeVisible();
  });

  it("renders loading message when component is in loading state", () => {
    mockBetLoadingState = true;
    renderWithClient(<Bets />);

    const rowsBeforeRender = screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    expect(screen.getByText("Loading...")).toBeVisible();
  });

  it("changes the value of betType selection dropdown", () => {
    mockBetLoadingState = false;
    renderWithClient(<Bets />);
    expect(screen.getByText("V75")).toBeVisible();

    fireEvent.click(screen.getByText("V75"));
    fireEvent.click(screen.getByText("V86"));
    expect(screen.getByText("V86")).toBeVisible();
  });
});