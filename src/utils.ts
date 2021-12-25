export const convertISO8601ToSeconds = (input) => {
  const regex = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let totalSeconds;

  if (regex.test(input)) {
    const matches = regex.exec(input);
    if (matches[1]) hours = Number(matches[1]);
    if (matches[2]) minutes = Number(matches[2]);
    if (matches[3]) seconds = Number(matches[3]);
    totalSeconds = hours * 3600 + minutes * 60 + seconds;
  }

  return totalSeconds;
};

export const getVideoDurationString = (duration: string) => {
  const seconds = convertISO8601ToSeconds(duration);
  const numMins = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds - numMins * 60);
  return `${numMins}m ${remainingSeconds}s`;
};

export function abbreviateNumber(num, digits = 0) {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
    { value: 1e12, symbol: 'T' },
    { value: 1e15, symbol: 'P' },
    { value: 1e18, symbol: 'E' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((x) => {
      return num >= x.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, '$1') + item.symbol
    : '0';
}
