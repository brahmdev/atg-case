import { ReactElement } from "react";

import { render } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";

import MockableFunction = jest.MockableFunction;

export interface MockReactQueryReturnValueType {
  data: object | null | undefined,
}

export interface ReactQueryReturnType {
  useQueryClient: MockableFunction,
  useQuery: (queryKey: string, queryFunction: () => MockReactQueryReturnValueType) => MockReactQueryReturnValueType,
}

export const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

export function renderWithClient (ui: ReactElement, queryClient?: QueryClient) {
  const testQueryClient = queryClient ? queryClient : createTestQueryClient();
  
  const { rerender, ...result } = render(
    <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
  );
  return {
    ...result,
    rerender: (rerenderUi: ReactElement) =>
      rerender(
        <QueryClientProvider client={testQueryClient}>
          {rerenderUi}
        </QueryClientProvider>
      ),
  };
}