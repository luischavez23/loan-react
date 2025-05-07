import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { MoneyFormat, totalPayment } from "./helpers";

function App() {
  const [quantity, setQuantity] = useState(50000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);

  const MAX = 100000;
  const MIN = 0;
  const STEP = 100;

  const handleChange = (e) => {
    setQuantity(+e.target.value);
  };

  const handleDecrease = () => {
    const count = quantity - STEP;
    if (count < MIN) {
      alert("Error");
      return;
    }
    setQuantity(count);
  };

  useEffect(() => {
    const resultTotal = totalPayment(quantity, months);
    setTotal(resultTotal);
  }, [quantity, months]);

  useEffect(() => {
    setPay(total / months);
  }, [total]);

  const handleIncrease = () => {
    const count = quantity + STEP;
    if (count > MAX) {
      alert("Error");
      return;
    }
    setQuantity(count);
  };

  return (
    <div className="my-20 max-w-xs md:max-w-md lg:max-w-lg mx-auto bg-white shadow p-10 rounded-bl-4xl rounded-tr-4xl">
      <Header />
      <div className="flex justify-between my-6">
        <Button operator={"-"} fn={handleDecrease} />
        <Button operator={"+"} fn={handleIncrease} />
      </div>
      <input
        type="range"
        className="w-full h-6 bg-gray-200 hover:accent-cyan-600 accent-cyan-500"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />
      <p className="text-3xl text-center my-10 text-cyan-600 font-extrabold">
        {MoneyFormat(quantity)} MXN
      </p>
      <div className="flex flex-col">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center">
          Choose your loan{" "}
          <span className="text-cyan-600 capitalize">payment</span> plan
        </h2>
        <select
          name="payment"
          className="w-full p-2 mt-5 text-center bg-white text-gray-500 border border-gray-300 rounded-lg text-xl font-bold"
          value={months}
          onChange={(e) => setMonths(+e.target.value)}
        >
          <option value="6">6 months</option>
          <option value="12">12 months</option>
          <option value="24">24 months</option>
        </select>
      </div>
      <div className="mt-5 space-y-3 bg-gray-50 p-5 rounded-2xl ">
        <h2 className="text-2xl font-extrabold text-gray-500 text-center capitalize ">
          <span className="text-cyan-600">Payment</span> resume
        </h2>
        <p className="text-xl text-gray-500 text-center font-bold">
          {months} months
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {MoneyFormat(total)} total
        </p>
        <p className="text-xl text-gray-500 text-center font-bold">
          {MoneyFormat(pay)} monthly
        </p>
      </div>
    </div>
  );
}

export default App;
