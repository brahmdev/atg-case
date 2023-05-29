import { useMemo } from "react";

import { Row, RowData } from "@tanstack/react-table";
import { Race } from "types/GameDetailsType";

import { horseTableColumn } from "components/horseDetails/horseTableColumn";
import { Table } from "components/table";

interface Props {
  row: Row<RowData>
}
export function HorseDetails ({ row }: Props) {
  const horseDetailTableColumn = useMemo(() => horseTableColumn(), []);
  const renderRaceDetailsTable = useMemo(() => {
    return (
      <Table
        data={(row.original as Race).starts}
        columns={horseDetailTableColumn}
      />
    );
  }, [row.original, horseDetailTableColumn]);
  
  return (
    <div className="m-6">
      {renderRaceDetailsTable}
    </div>
  );
}
