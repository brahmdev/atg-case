import { useEffect, useMemo, useState } from "react";

import { Row, RowData } from "@tanstack/react-table";
import { Result } from "types/BetDetailsType";
import { Race } from "types/GameDetailsType";

import { raceTableColumns } from "components/raceDetails/raceTableColumns";
import { RaceHorses } from "components/raceHorses";
import { Table } from "components/table";

import { useGameDetailsQuery } from "hooks/queries/useGameDetails";

interface Props {
  betResult: Result;
}
export function RaceDetails({ betResult }: Props) {
  const [raceDetails, setRaceDetails] = useState<Array<Race>>();
  const { data: raceDetailsData, isLoading: isGameDetailsLoading } =
    useGameDetailsQuery({ gameId: betResult?.id });

  useEffect(() => {
    if (!isGameDetailsLoading && raceDetailsData) {
      const raceDetailsToUpdate = { ...raceDetailsData };
      /*
       ** We need to add "subRows" property here with race.starts as value because
       *  react-table expects to have subRows as property when we need to show expandable rows
       */
      raceDetailsToUpdate?.races.map((race) => {
        race["subRows"] = race.starts;
      });
      setRaceDetails(raceDetailsToUpdate.races);
    }
  }, [raceDetailsData, isGameDetailsLoading]);

  const columns = useMemo(() => raceTableColumns(), []);

  if (isGameDetailsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="m-6">
      <div className="m-6">
        <Table
          data={raceDetails || []}
          columns={columns}
          getRowCanExpand={() => true}
          renderSubComponent={({ row }: { row: Row<RowData> }) => (
            <RaceHorses raceRow={row.original as Race} />
          )}
        />
      </div>
    </div>
  );
}
