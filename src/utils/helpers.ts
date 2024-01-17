/**
 * Returns a string to display the number of remaining spots
 * @param spots number
 * @returns string
 */
export function getRemainingSpotsString(spots: number): string {
  const remainingString = spots > 1 ? 'spots' : 'spot';
  return `${spots} ${remainingString} remaining`;
}
