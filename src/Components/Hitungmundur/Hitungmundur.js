import { useEffect, useState } from "react";
function Hitungmundur() {
  const [expiryTime, setExpiryTime] = useState("13 nov 2022 08:00:25");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });
  const countdownTimer = () => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
  };

  useEffect(() => {
    countdownTimer();
  });

  return (
    <div className="row font-poppins">
      <div className="col-sm-6">
        <div className="btn-group my-3 flex justify-around py-10 text-xl">
          {expiryTime !== false ? (
            <>
              <div className="">
                <h1>{countdownTime.countdownDays}</h1>
                <p>Days</p>
              </div>
              <div className="">
                <h1>{countdownTime.countdownHours}</h1>
                <p>Hours</p>
              </div>
              <div className="">
                <h1>{countdownTime.countdownMinutes}</h1>
                <p>Minutes</p>
              </div>
              <div className="">
                <h1>{countdownTime.countdownSeconds}</h1>
                <p>Seconds</p>
              </div>
            </>
          ) : (
            <p>Deal has been Expired</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default Hitungmundur;
