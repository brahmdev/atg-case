import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

type WrapperProps = {
  children: React.ReactNode
};

export const queryClient = new QueryClient();
export const hookWrapper = ({ children }: WrapperProps) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);
