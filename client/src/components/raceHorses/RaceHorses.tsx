import { useEffect, useMemo, useState } from "react";

import { Row, RowData } from "@tanstack/react-table";
import { Race, Start } from "types/GameDetailsType";

import { HorseDetails } from "components/horseDetails/HorseDetails";
import { raceHorsesTableColumn } from "components/raceHorses/raceHorsesTableColumn";
import { Table } from "components/table";

interface Props {
  raceRow: Race;
}
export function RaceHorses({ raceRow }: Props) {
  const [raceStarts, setRaceStarts] = useState<Array<Start>>([]);
  const horseDetailTableColumn = useMemo(() => raceHorsesTableColumn(), []);

  useEffect(() => {
    const updatedRaces = raceRow.starts.map((start) => {
      start.subRows = [start.horse];
      return start;
    });
    setRaceStarts(updatedRaces);
  }, [raceRow]);

  const renderRaceDetailsTable = useMemo(() => {
    return (
      <Table
        data={raceStarts}
        columns={horseDetailTableColumn}
        getRowCanExpand={() => true}
        renderSubComponent={({ row }: { row: Row<RowData> }) => (
          <HorseDetails startRow={row.original as Start} />
        )}
      />
    );
  }, [raceStarts, horseDetailTableColumn]);

  return <div className="m-6">{renderRaceDetailsTable}</div>;
}
