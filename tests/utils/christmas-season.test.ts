import { isChristmasSeasonDate } from '@/utils/christmas-season';

describe('isChristmasSeasonDate', () => {
  test.each([
    [11, 14, false],
    [11, 15, true],
    [11, 16, true],
    [11, 30, true],
    [12, 1, true],
    [12, 25, true],
    [12, 31, true],
    [1, 1, true],
    [1, 15, true],
    [1, 16, false],
    [2, 1, false],
    [10, 31, false],
  ])('returns %s for month %s, day %s', (month, day, expected) => {
    expect(isChristmasSeasonDate(month, day)).toBe(expected);
  });
});
