import { useEffect, useMemo, useState } from "react";

import { useBetDetailsQuery } from "hooks/queries/useBetDetails";

import { SelectMenu } from "src/components/selectMenu";
import { Table } from "src/components/table";
import { BetDetails } from "src/types/BetDetails";

import { BetDetailsTableColumns } from "./columns";

const BETS_TYPE = ["V86", "V75", "GS75"];

export function Bets () {
  const [selectedBetType, setSelectedBetType] = useState(BETS_TYPE[0]);
  const { data, isLoading, } = useBetDetailsQuery({ betType: selectedBetType });

  const [betDetails, setBetDetails] = useState<BetDetails>();

  useEffect(() => {
    if (!isLoading && data) {
      console.log("DATA ", data);
      setBetDetails(data);
    }
  }, [data, isLoading]);

  const columns = useMemo(
    () => BetDetailsTableColumns,
    []);

  return (
    <div className="m-6">
      <div className="float-right">
        <SelectMenu menuItems={BETS_TYPE} onBetTypeChange={setSelectedBetType} activeItem={selectedBetType} />
      </div>

      <Table
        data={betDetails?.results || []}
        columns={columns}
      />
    </div>
  );
}
