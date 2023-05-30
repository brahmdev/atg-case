import { Horse } from "types/GameDetailsType";

export function horsesDetailsTableColumn () {
  return [
    {
      accessorKey: "Trainer",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Horse } }) => {
        const trainerInfo = cellData.row.original.trainer;
        return (
          <p className="p-2">{trainerInfo.firstName} {trainerInfo.lastName}</p>
        );
      },
    },
    {
      accessorKey: "Pedigree (Father)",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Horse } }) => {
        const pedigreeInfo = cellData.row.original.pedigree;
        return (
          <p className="p-2">{pedigreeInfo.father.name}</p>
        );
      },
    },
  ];
}