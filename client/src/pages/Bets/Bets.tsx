import { useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import { BetDetails } from "types/BetDetailsType";

import { SelectMenu } from "components/selectMenu";
import { Table } from "components/table";

import { useBetDetailsQuery } from "hooks/queries/useBetDetails";


import { BetDetailsTableColumns } from "./columns";

const BETS_TYPE = ["V86", "V75", "GS75"];

export function Bets () {
  const [selectedBetType, setSelectedBetType] = useState(BETS_TYPE[0]);
  const { data, isLoading, } = useBetDetailsQuery({ betType: selectedBetType });

  const [betDetails, setBetDetails] = useState<BetDetails>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      setBetDetails(data);
    }
  }, [data, isLoading]);

  const handleShowDetails = useCallback((gameDetailPath: string) => {
    navigate(gameDetailPath);
  }, [navigate]);

  const columns = useMemo(() => BetDetailsTableColumns({ handleShowDetails }), [handleShowDetails]);

  return (
    <div className="m-6">
      <div className="float-right">
        <SelectMenu menuItems={BETS_TYPE} onChange={setSelectedBetType} activeItem={selectedBetType} />
      </div>

      <Table
        data={betDetails?.results || []}
        columns={columns}
      />
    </div>
  );
}
