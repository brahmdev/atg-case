
import { Result, Track } from "types/BetDetailsType";

interface Props {
  handleShowDetails: (gameId: string) => void;
}
export function BetDetailsTableColumns ({ handleShowDetails }: Props) {

  return [
    {
      accessorKey: "Start Time",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Result } }) => {
        const trackInfo = cellData.row.original;
        return (
          <p key={trackInfo.id}>{trackInfo.startTime.toString()}</p>
        );

      },
    },
    {
      accessorKey: "Tracks",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Result } }) => {
        const trackInfo = cellData.row.original;
        return (
          <div className="flex justify-start items-center">
            {
              trackInfo.tracks.map((track: Track) => {
                return (
                  <span
                    key={track.id}
                    className="m-2 p-2 bg-indigo-400 text-white font-bold rounded"
                  >
                    {track.name}
                  </span>
                );
              }
              )
            }
          </div>
        );

      },

    },
    {
      id: "showDetails",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Result } }) => {
        const trackInfo = cellData.row.original;
        return (
          <div className="flex justify-start items-center">
            <a
              key={trackInfo.id}
              className="m-2 p-2 font-bold hover:cursor-pointer underline"
              onClick={() => handleShowDetails(`/game/${trackInfo.id}`)}
            >
              Show Details
            </a>
          </div>
        );

      },

    },
  ];
}