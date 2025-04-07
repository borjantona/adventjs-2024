function getCompleted(timeWorked: string, totalTime: string): string {
  const timeToSeconds = (time: string): number => {
    const timeArr = time.split(":").map((x) => +x);
    return timeArr[0] * 3600 + timeArr[1] * 60 + timeArr[2];
  };

  return (
    Math.round((timeToSeconds(timeWorked) / timeToSeconds(totalTime)) * 100) +
    "%"
  );
}
getCompleted("01:00:00", "03:00:00"); // 33%
getCompleted("02:00:00", "04:00:00"); // 50%
getCompleted("01:00:00", "01:00:00"); // 100%
getCompleted("00:10:00", "01:00:00"); // 17%
getCompleted("01:10:10", "03:30:30"); // 33%
getCompleted("03:30:30", "05:50:50"); // 60%
