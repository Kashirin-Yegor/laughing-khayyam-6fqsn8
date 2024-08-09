import { queryClient } from "../lib/queryClient.ts";
import { QueryClientProvider } from "react-query";
import { FC, ReactNode } from "react";

export interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
