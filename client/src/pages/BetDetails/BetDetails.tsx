import { useBetDetails } from "src/hooks/queries/useBetDetails";

export function BetDetails () {
  const { data, isLoading } = useBetDetails({ betType: "V75" });
  console.log("IS LOADING ", isLoading);
  console.log("DATA ", data);

  return (
    <div>
      <span>BetDetails Page</span>
    </div>
  );
}
