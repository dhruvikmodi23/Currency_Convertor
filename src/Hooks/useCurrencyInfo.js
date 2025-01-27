import { useEffect, useState } from "react";

function useCurrencyInfo(currency1) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency1}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency1]));
  }, [currency1]);
  return data;
}

export default useCurrencyInfo;
