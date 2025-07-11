// would definitely use date-fns over these
const padded = (number: number) => String(number).padStart(2, '0');

export function millisecondsToHHMMSS(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${padded(hours)}:${padded(minutes)}:${padded(seconds)}`;
}

export function millisecondsToMMSS(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${padded(minutes)}:${padded(seconds)}`;
}

export function unixToHHMMSS(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);

  return `${padded(date.getHours())}:${padded(date.getMinutes())}:${padded(date.getSeconds())}`;
}
