export function millisToMinutesAndSeconds(millis: number) {
  const seconds = Math.floor((millis / 1000) % 60);

  const minutes = Math.floor((millis / 1000 / 60) % 60);

  const hours = Math.floor((millis / 1000 / 60 / 60) % 24);

  return [
    hours.toString().padStart(2, "0"),
    minutes.toString().padStart(2, "0"),
    seconds.toString().padStart(2, "0"),
  ].join(":");
}
