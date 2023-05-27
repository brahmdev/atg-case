import { useEffect, useMemo, useState } from "react";

import { useParams } from "react-router-dom";
import { GameDetailsType } from "types/GameDetailsType";

import { Table } from "components/table";

import { useGameDetailsQuery } from "hooks/queries/useGameDetails";

import { GameDetailsTableColumns } from "./columns";

export function GameDetails () {
  const { gameId } = useParams();
  const { data, isLoading, } = useGameDetailsQuery({ gameId: gameId });

  const [gameDetails, setGameDetails] = useState<GameDetailsType>();

  useEffect(() => {
    if (!isLoading && data) {
      console.log("game data in game details page ", data);
      setGameDetails(data);
    }
  }, [data, isLoading]);

  const columns = useMemo(() => GameDetailsTableColumns(), []);

  return (
    <div className="m-6">
      <Table
        data={gameDetails?.races || []}
        columns={columns}
      />
    </div>
  );
}