import { useEffect, useState } from "react";

import { Result } from "types/BetDetailsType";

import { RaceDetails } from "components/raceDetails";
import { SelectMenu } from "components/selectMenu";

import { useBetDetailsQuery } from "hooks/queries/useBetDetails";

const BETS_TYPE = ["V75", "V86", "GS75"];

export function Bets() {
  const [selectedBetType, setSelectedBetType] = useState(BETS_TYPE[0]);

  const [recentBetResult, setRecentBetResult] = useState<Result>();
  const [recentBetResultTracks, setRecentBetResultTracks] =
    useState<Array<string>>();

  const { data: betDetailsData, isLoading: isBetDetailsLoading } =
    useBetDetailsQuery({ betType: selectedBetType });

  useEffect(() => {
    if (!isBetDetailsLoading && betDetailsData) {
      const recentResult = betDetailsData.results[0];
      const tracks: Array<string> = [];
      recentResult.tracks.map((track) => {
        tracks.push(track.name);
      });
      setRecentBetResult(recentResult);
      setRecentBetResultTracks(tracks);
    }
  }, [betDetailsData, isBetDetailsLoading]);

  if (isBetDetailsLoading) {
    return <p>Loading...</p>;
  }

  function renderTracks() {
    return (
      <div
        className="flex justify-start items-center"
        data-testid="track-container"
      >
        <span className="font-semibold">Tracks:</span>
        <div className="ml-2 leading-10  whitespace-pre-wrap">
          {recentBetResultTracks?.map((trackName) => {
            return (
              <span
                key={trackName}
                className="m-2 p-2 font-bold rounded hover:cursor-pointer bg-indigo-400 text-white"
              >
                {trackName}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="m-6">
      <div className="float-right">
        <SelectMenu
          menuItems={BETS_TYPE}
          onChange={setSelectedBetType}
          activeItem={selectedBetType}
        />
      </div>

      {recentBetResult && renderTracks()}

      <div className="m-6">
        {recentBetResult && <RaceDetails betResult={recentBetResult} />}
      </div>
    </div>
  );
}
