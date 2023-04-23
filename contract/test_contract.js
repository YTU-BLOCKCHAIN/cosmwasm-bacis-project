const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const test_contract = (client) => {
  const Increment = async (senderAddress) => {
    const msg = {
      increment: {},
    };
    try {
      const result = await client.execute(
        senderAddress,
        contractAddress,
        msg,
        "auto"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const IncrementByValue = async (senderAddress, value) => {
    const msg = {
      increment_by_value: {
        value,
      },
    };
    try {
      const result = await client.execute(
        senderAddress,
        contractAddress,
        msg,
        "auto"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const Decrement = async (senderAddress) => {
    const msg = {
      decrement: {},
    };
    try {
      const result = await client.execute(
        senderAddress,
        contractAddress,
        msg,
        "auto"
      );
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const GetCount = async () => {
    const res = await client.queryContractSmart(contractAddress, {
      get_count: {},
    });
    return res;
  };

  return {
    Increment,
    IncrementByValue,
    Decrement,
    GetCount,
  };
};

export default test_contract;
