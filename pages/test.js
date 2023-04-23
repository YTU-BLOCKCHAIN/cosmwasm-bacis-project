import React, { useEffect, useState } from "react";
import { useWallet } from "../context/wallet";
import test_contract from "../contract/test_contract";
import { useKeplr } from "../services/keplr";

export default function Test() {
  const [count, setCount] = useState(0);
  const keplr = useKeplr();
  const wallet = useWallet();

  const GetCount = async () => {
    try {
      if (!wallet.initialized) return;
      const client = test_contract(wallet.getClient());
      let res = await client.GetCount();
      setCount(res.count);
    } catch (err) {
      console.log(err);
    }
  };

  function handleClick() {
    if (wallet.initialized) {
      keplr.disconnect();
    } else {
      keplr.connect();
    }
  }

  const handleIncrement = async () => {
    try {
      if (!wallet.initialized) return;
      const client = test_contract(wallet.getClient());
      let res = await client.Increment(wallet.address);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const Decrement = async () => {
    try {
      if (!wallet.initialized) return;
      const client = test_contract(wallet.getClient());
      let res = await client.Decrement(wallet.address);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleIncrementbyValue = async () => {
    try {
      if (!wallet.initialized) return;
      const client = test_contract(wallet.getClient());
      let res = await client.IncrementByValue(wallet.address, 5);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <button onClick={handleClick}>Connect Wallet</button>
      <h1>{wallet.address}</h1>
      <div>
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleIncrementbyValue}>increment by value</button>
        <button onClick={Decrement}>decrement</button>

        <button onClick={GetCount}>{count}</button>
      </div>
    </div>
  );
}
