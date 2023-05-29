import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Race } from "types/GameDetailsType";

export function raceTableColumns () {
  return [
    {
      accessorKey: "",
      id: "expand",
      className: "w-275 min-h-fit",
      cell: ({ row }: { row: { getCanExpand: () => boolean, getToggleExpandedHandler: () => () => void, getIsExpanded: () => boolean }}) => {
        return row.getCanExpand() && (
          <button
            {...{
              onClick: row.getToggleExpandedHandler(),
              className: "hover:cursor-pinter",
            }}
          >
            {row.getIsExpanded() ?
              <ChevronDownIcon
                className="h-5 w-5 hover:cursor-pointer"
              /> :
              <ChevronRightIcon
                className="h-5 w-5 hover:cursor-pointer"
              />}
          </button>
        );
      },
    },
    {
      header: "Race Number",
      accessorKey: "number",
      className: "w-275 min-h-fit",
    },
    {
      accessorKey: "Race Name",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p key={raceInfo.name} className="py-2 font-bold text-slate-700 tracking-wide">{raceInfo.name}</p>
        );
        
      },
    },
    {
      header: "Track",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p key={raceInfo.track?.id} className="py-2 font-bold text-slate-700 tracking-wide">{raceInfo.track?.name}</p>
        );
        
      },
    },
    {
      header: "Start Time",
      accessorKey: "scheduledStartTime",
      id: "startTime",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p className="font-bold text-slate-700 tracking-wide" key={raceInfo.startTime.toString()}>{new Date(raceInfo.startTime).toLocaleString()}</p>
        );
      },
    },
  ];
}