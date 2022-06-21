const setTimeFormat = (totalSecs) => {
  const seconds = (totalSecs % 60);
  const minutes = Math.floor(totalSecs / 60);
  const minutesFormat = (minutes < 10)
    ? ((minutes === 0) ? '00' : `0${minutes}`)
    : `${minutes}`;
  const secondsFormant = (seconds < 10) ? `0${seconds}` : `${seconds}`;

  return `${minutesFormat}:${secondsFormant}`;
};

export default setTimeFormat;