import { Result, Track } from "types/BetDetails";


export const BetDetailsTableColumns = [
  {
    id: "tracks.name",
    accessorKey: "Tracks",
    className: "w-275 min-h-fit",
    cell: (cellData: { row: { original: Result } }) => {
      const trackInfo = cellData.row.original;
      return (
        <div className="flex justify-start items-center">
          {
            trackInfo.tracks.map((track: Track) => {
              return (
                <a key={track.id} className="m-2 p-2 bg-indigo-400 text-white font-bold rounded">{track.name}</a>
              );
            }
            )
          }
        </div>
      );

    },

  },
  {
    Header: "Start Time",
    id: "startTime",
    accessorKey: "startTime",
    className: "w-275 min-h-fit",
    cell: (cellData: { row: { original: Result } }) => {
      const trackInfo = cellData.row.original;
      return (
        <p key={trackInfo.id}>{trackInfo.startTime.toString()}</p>
      );

    },
  }
];