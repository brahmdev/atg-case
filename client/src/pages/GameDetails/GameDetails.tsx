import { useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { GameDetailsType, Horse } from "types/GameDetailsType";

import { Table } from "components/table";

import { useGameDetailsQuery } from "hooks/queries/useGameDetails";

import { GameDetailsTableColumns } from "./columns";

export function GameDetails () {
  const { gameId } = useParams();
  const { data, isLoading, } = useGameDetailsQuery({ gameId: gameId });

  const [gameDetails, setGameDetails] = useState<GameDetailsType>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data) {
      setGameDetails(data);
    }
  }, [data, isLoading]);

  const handleShowHorseDetails = useCallback((horse: Horse) => {
    navigate("/horse-details", {
      state: horse
    });
  }, [navigate]);

  const columns = useMemo(() => GameDetailsTableColumns({ handleShowHorseDetails }), [handleShowHorseDetails]);

  return (
    <div className="m-6">
      <Table
        data={gameDetails?.races || []}
        columns={columns}
      />
    </div>
  );
}