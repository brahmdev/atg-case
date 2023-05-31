import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { Start } from "types/GameDetailsType";

export function raceHorsesTableColumn() {
  return [
    {
      accessorKey: "",
      id: "expand-race-horses",
      className: "w-275 min-h-fit",
      cell: ({
        row,
      }: {
        row: {
          getCanExpand: () => boolean;
          getToggleExpandedHandler: () => () => void;
          getIsExpanded: () => boolean;
        };
      }) => {
        return (
          row.getCanExpand() && (
            <button
              {...{
                onClick: row.getToggleExpandedHandler(),
                className: "hover:cursor-pinter",
              }}
            >
              {row.getIsExpanded() ? (
                <ChevronDownIcon
                  data-testid="collapse-horse-details"
                  className="h-5 w-5 hover:cursor-pointer"
                />
              ) : (
                <ChevronRightIcon
                  data-testid="expand-horse-details"
                  className="h-5 w-5 hover:cursor-pointer"
                />
              )}
            </button>
          )
        );
      },
    },
    {
      accessorKey: "Start Number",
      id: "startNumber",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const startNumber = cellData.row.original.number;
        return (
          <p className="p-2" id={"test"}>
            {startNumber}
          </p>
        );
      },
    },
    {
      accessorKey: "Horse Name",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const horseInfo = cellData.row.original.horse;
        return <p className="p-2 text-left">{horseInfo.name}</p>;
      },
    },
    {
      accessorKey: "Driver",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const driverInfo = cellData.row.original.driver;
        return (
          <p className="p-2">
            {driverInfo.firstName} {driverInfo.lastName}
          </p>
        );
      },
    },
  ];
}
