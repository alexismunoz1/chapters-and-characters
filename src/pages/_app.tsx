import "@/lib/base.css";
import "@/components/characters/characters.modules.css";
import "@/components/episodes/episodes.modules.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import StyledComponentsRegistry from "@/lib/registry";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </QueryClientProvider>
  );
}
