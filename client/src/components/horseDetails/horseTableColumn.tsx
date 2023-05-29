import { Start } from "types/GameDetailsType";

export function horseTableColumn () {
  
  return [
    {
      accessorKey: "Start Number",
      id: "startNumber",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const startNumber = cellData.row.original.number;
        return (
          <p className="p-2" id={"test"} >{startNumber}</p>
        );
      },
    },
    {
      accessorKey: "Horse Name",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const horseInfo = cellData.row.original.horse;
        return (
          <p className="p-2 text-left">{horseInfo.name}</p>
        );
      },
    },
    {
      accessorKey: "Driver",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const driverInfo = cellData.row.original.driver;
        return (
          <p className="p-2">{driverInfo.firstName} {driverInfo.lastName}</p>
        );
      },
    },
    {
      accessorKey: "Trainer",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const trainerInfo = cellData.row.original.horse.trainer;
        return (
          <p className="p-2">{trainerInfo.firstName} {trainerInfo.lastName}</p>
        );
      },
    },
    {
      accessorKey: "Pedigree (Father)",
      className: "w-275 min-h-fit",
      cell: (cellData: { row: { original: Start } }) => {
        const pedigreeInfo = cellData.row.original.horse.pedigree;
        return (
          <p className="p-2">{pedigreeInfo.father.name}</p>
        );
      },
    },
  ];
}