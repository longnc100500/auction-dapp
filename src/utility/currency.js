export const currencyFormat = (n = 0, currency = "đ") => {
  return (
    n.toFixed(0).replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c
    }) +
    "" +
    currency
  )
}
