import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Bets } from "pages/";
import { GameDetails } from "pages/GameDetails";
import { HorseDetails } from "pages/HorseDetails";
import { Header } from "pages/layout/Header";

import "./App.css";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Bets />,
  },
  {
    path: "/game/:gameId",
    element: <GameDetails />,
  },
  {
    path: "/horse-details",
    element: <HorseDetails />,
  },
]);

function App () {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
