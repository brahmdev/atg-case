import { screen, within } from "@testing-library/react";
import { GAME_INFO_MOCK } from "mocks/utils/mockGameInfo";
import {
  MockReactQueryReturnValueType,
  renderWithClient,
} from "testUtils/utils/reactQueryUtils";

import { HorseDetails } from "components/horseDetails/HorseDetails";

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

describe("test HorseDetails component", () => {
  it("renders the horse details table on page load", () => {
    const rowsBeforeRender = screen.queryByRole("table > tbody > tr");
    expect(rowsBeforeRender).toBeNull();
    renderWithClient(
      <HorseDetails startRow={GAME_INFO_MOCK.races[0].starts[0]} />
    );

    const table = screen.getByRole("table");
    const trackName = within(table).getByRole("cell", { name: "Muscle Mass" });
    expect(trackName).toBeVisible();
  });

  it("expand icon is not present", () => {
    renderWithClient(
      <HorseDetails startRow={GAME_INFO_MOCK.races[0].starts[0]} />
    );
    expect(screen.queryByRole("svg")).not.toBeInTheDocument();
  });
});
