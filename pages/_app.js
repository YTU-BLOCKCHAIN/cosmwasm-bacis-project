import React from "react";
import { WalletProvider } from "../context/wallet";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}
