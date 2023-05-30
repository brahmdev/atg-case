import { fireEvent, screen, within } from "@testing-library/react";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";
import { MockReactQueryReturnValueType, renderWithClient } from "testUtils/utils/reactQueryUtils";

import { RaceHorses } from "components/raceHorses";

const mockReturnValue: MockReactQueryReturnValueType = { data: GAME_INFO_MOCK };

jest.resetAllMocks();

jest.mock("react-query", () => {
  return {
    ...jest.requireActual("react-query"),
    useQuery: () => {
      return {
        ...mockReturnValue,
        isLoading: false,
      };
    },
  };
});

describe("test RaceHorses component", () => {
  it("renders the race horses table on page load", async () => {
    const rowsBeforeRender = await screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    renderWithClient(<RaceHorses raceRow={GAME_INFO_MOCK.races[0]} />);
    
    const table = await screen.getByRole("table");
    const trackName = within(table).getByRole("cell", { name: "Filippa B.J." });
    expect(trackName).toBeVisible();
  });
  
  it("expands the race horse row when clicked on chevron right icon on row", async () => {
    renderWithClient(<RaceHorses raceRow={GAME_INFO_MOCK.races[0]} />);
    fireEvent.click(screen.getAllByTestId("expand-horse-details")[0]);
    const table = await screen.getAllByRole("table")[1];
    const horseFatherName = within(table).getByRole("cell", { name: "Muscle Mass" });
    expect(horseFatherName).toBeVisible();
  });
});