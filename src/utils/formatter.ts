const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
});

export const FormatToCurrency = (value: number) => formatter.format(value);
