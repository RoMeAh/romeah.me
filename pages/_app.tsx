import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";

function SafeHydrate({ children }: { children: JSX.Element }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        <Component {...pageProps} />
      </ChakraProvider>
    </SafeHydrate>
  );
}

export default MyApp;
