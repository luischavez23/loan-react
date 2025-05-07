const MoneyFormat = (number) => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatter.format(number);
};

const totalPayment = (count, deadlines) => {
  let total = count;

  if (count <= 25000) {
    total *= 1.5;
  } else if (count > 25000 && count <= 50000) {
    total *= 1.4;
  } else if (count > 50000 && count <= 75000) {
    total *= 1.3;
  } else {
    total *= 1.2;
  }

  if (deadlines === 6) {
    total *= 1.1;
  } else if (deadlines === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }
  return total;
};

export { MoneyFormat, totalPayment };
