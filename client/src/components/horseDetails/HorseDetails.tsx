import { useMemo } from "react";

import { Start } from "types/GameDetailsType";

import { horsesDetailsTableColumn } from "components/horseDetails/horseTableColumn";
import { Table } from "components/table";

interface Props {
  startRow: Start;
}
export function HorseDetails({ startRow }: Props) {
  const horseTableColumn = useMemo(() => horsesDetailsTableColumn(), []);

  const renderRaceDetailsTable = useMemo(() => {
    return <Table data={[startRow.horse]} columns={horseTableColumn} />;
  }, [startRow, horseTableColumn]);

  return <div className="m-6">{renderRaceDetailsTable}</div>;
}
