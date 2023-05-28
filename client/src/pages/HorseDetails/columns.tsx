
import { YearRecord } from "types/GameDetailsType";

export function HorseDetailsTableColumns () {

  return [
    {
      accessorKey: "Code",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: YearRecord } }) => {
        const recordInfo = cellData.row.original;
        return (
          <p className="m-2 p-2" >{recordInfo.code}</p>
        );
      },
    },
    {
      accessorKey: "Start Method",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: YearRecord } }) => {
        const recordInfo = cellData.row.original;
        return (
          <p className="m-2 p-2 text-left">{recordInfo.startMethod}</p>
        );
      },
    },
    {
      accessorKey: "Distance",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: YearRecord } }) => {
        const recordInfo = cellData.row.original;
        return (
          <p className="m-2 p-2">{recordInfo.distance}</p>
        );
      },
    },
    {
      accessorKey: "Place",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: YearRecord } }) => {
        const recordInfo = cellData.row.original;
        return (
          <p className="m-2 p-2">{recordInfo.place}</p>
        );
      },
    },
  ];
}