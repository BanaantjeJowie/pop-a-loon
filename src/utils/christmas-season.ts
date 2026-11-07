/** Check whether a month and day fall within the Christmas season. */
export function isChristmasSeasonDate(month: number, day: number): boolean {
  return (
    (month === 11 && day >= 15) || month === 12 || (month === 1 && day <= 15)
  );
}

/** Check the current date using the Europe/Brussels calendar date. */
export function isChristmasSeason(): boolean {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Brussels',
    month: 'numeric',
    day: 'numeric',
  }).formatToParts(new Date());
  const month = Number(parts.find((part) => part.type === 'month')?.value);
  const day = Number(parts.find((part) => part.type === 'day')?.value);

  return isChristmasSeasonDate(month, day);
}
