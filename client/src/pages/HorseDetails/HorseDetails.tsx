import { useEffect, useMemo, useState } from "react";

import { useLocation } from "react-router-dom";
import { Horse, Year } from "types/GameDetailsType";

import { SelectMenu } from "components/selectMenu";
import { Table } from "components/table";

import { HorseDetailsTableColumns } from "./columns";


export function HorseDetails () {
  const horseFromLocation = useLocation().state as Horse;

  const [horseDetails, setHorseDetails] = useState<Horse>();
  const [selectedStaticsYear, setSelectedStaticsYear] = useState<string>();
  const [selectYearStats, setSelectedYearStats] = useState<Year>();

  const columns = useMemo(() => HorseDetailsTableColumns(), []);

  useEffect(() => {
    if (horseFromLocation) {
      setHorseDetails(horseFromLocation);
      setSelectedStaticsYear(Object.keys(horseFromLocation.statistics.years)[0]);
    }
  }, [horseFromLocation]);

  useEffect(() => {
    if (selectedStaticsYear) {
      const recordsToShow = horseDetails?.statistics.years[selectedStaticsYear];
      setSelectedYearStats(recordsToShow);
    }
  }, [selectedStaticsYear, horseDetails?.statistics.years]);

  return (
    <div className="m-10">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <div className="flex justify-start items-center">
            <span className="font-semibold">Horse Name:</span>
            <span className="ml-2">{horseDetails?.name}</span>
          </div>

          <div className="flex justify-start items-center">
            <span className="font-semibold">Trainer Name:</span>
            <span className="ml-2">{horseDetails?.trainer.firstName} {horseDetails?.trainer.lastName}</span>
          </div>

          <div className="flex justify-start items-center">
            <span className="font-semibold">Horse Father:</span>
            <span className="ml-2">{horseDetails?.pedigree.father.name}</span>
          </div>
        </div>

        {horseDetails && selectedStaticsYear &&
          <SelectMenu
            menuItems={Object.keys(horseDetails.statistics.years)}
            onChange={setSelectedStaticsYear}
            activeItem={selectedStaticsYear}
          />
        }
      </div>

      <div className="mt-10">
        <Table
          data={selectYearStats?.records || []}
          columns={columns}
        />
      </div>
    </div>
  );
}