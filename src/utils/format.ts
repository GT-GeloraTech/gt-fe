export function formatCurrency(amount: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(amount);
}

export function formatDate(
  value: string | number | Date,
  options: Intl.DateTimeFormatOptions = { dateStyle: "medium" },
  locale = "en-US",
): string {
  return new Intl.DateTimeFormat(locale, options).format(new Date(value));
}

export function truncate(value: string, max = 80): string {
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}
