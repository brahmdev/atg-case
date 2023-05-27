import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { BetDetails } from "pages/";

import { Header } from "src/layout/Header";

import "./App.css";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <BetDetails />,
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
