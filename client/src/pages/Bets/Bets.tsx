import { useBetDetailsQuery } from "src/hooks/queries/useBetDetails";

export function Bets () {
  const { data, isLoading, } = useBetDetailsQuery({ betType: "V75" });

  console.log("isLoading ", isLoading);
  console.log("DATA ", data);
  return (
    <div>
      <span>Bets Page</span>
    </div>
  );
}
