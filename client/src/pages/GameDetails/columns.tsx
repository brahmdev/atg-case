
import { Horse, Race, Start } from "types/GameDetailsType";

interface Props {
  handleShowHorseDetails: (horse: Horse) => void;
}

export function GameDetailsTableColumns ({ handleShowHorseDetails }: Props) {

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
      accessorKey: "Races",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Race } }) => {
        const raceInfo = cellData.row.original;
        return (
          <div className="flex justify-start items-center">
            {
              raceInfo.starts.map((start: Start) => {
                return (
                  <a
                    key={start.number}
                    className="m-2 p-2 bg-slate-400 text-white font-bold rounded hover:cursor-pointer"
                    onClick={() => handleShowHorseDetails(start.horse)}
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