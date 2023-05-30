import { fireEvent, screen, within } from "@testing-library/react";
import { BET_RESULTS_MOCK } from "mocks/utils/mockBetResults";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";
import { MockReactQueryReturnValueType, renderWithClient } from "testUtils/utils/reactQueryUtils";

import { RaceDetails } from "components/raceDetails";

const mockReturnValue: MockReactQueryReturnValueType = { data: GAME_INFO_MOCK };
let mockLoadingValue = false;

jest.resetAllMocks();

jest.mock("react-query", () => {
  return {
    ...jest.requireActual("react-query"),
    useQuery: () => {
      return {
        ...mockReturnValue,
        isLoading: mockLoadingValue,
      };
    },
  };
});

describe("test RaceDetails component", () => {
  it("renders the race details table on page load", () => {
    const rowsBeforeRender = screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    renderWithClient(<RaceDetails betResult={BET_RESULTS_MOCK} />);
  
    const table = screen.getByRole("table");
    const raceName = within(table).getByRole("cell", { name: "Gränges - Lady Snärts lopp - STL Stoeliten, Försök 6 (Final Solvalla 26 december)" });
    expect(raceName).toBeVisible();
  });
  
  it("expands the current row when clicked on chevron right icon on row", () => {
    renderWithClient(<RaceDetails betResult={BET_RESULTS_MOCK} />);
    fireEvent.click(screen.getAllByTestId("expand-race-details")[0]);
    const table = screen.getAllByRole("table")[1];
    const horseName = within(table).getByRole("cell", { name: "Filippa B.J." });
    expect(horseName).toBeVisible();
  });

  it("renders loading message when component is in loading state", () => {
    mockLoadingValue = true;
    renderWithClient(<RaceDetails betResult={BET_RESULTS_MOCK} />);

    const rowsBeforeRender = screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    expect(screen.getByText("Loading...")).toBeVisible();
  });
});