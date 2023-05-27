
import { Race, Start } from "types/GameDetailsType";

export function GameDetailsTableColumns () {

  return [
    {
      accessorKey: "Race Number",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p key={raceInfo.id}>{raceInfo.number}</p>
        );

      },
    },
    {
      accessorKey: "Track",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p key={raceInfo.track.id} className="m-2 p-2 bg-indigo-400 text-white font-bold rounded">{raceInfo.track.name}</p>
        );

      },
    },
    {
      accessorKey: "Start Time",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <p key={raceInfo.startTime.toString()}>{raceInfo.startTime.toString()}</p>
        );

      },
    },
    {
      accessorKey: "Starts",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <div className="flex justify-start items-center">
            {
              raceInfo.starts.map((start: Start) => {
                console.log("start ", start);
                return (
                  <a
                    key={start.number}
                    className="m-2 p-2 bg-slate-400 text-white font-bold rounded hover:cursor-pointer"
                  >
                    {start.number}
                  </a>
                );
              }
              )
            }
          </div>
        );
      },
    },
  ];
}