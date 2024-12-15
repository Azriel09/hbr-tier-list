import { useState, useEffect } from "react";
import "./template.css";
export default function EventTemplate({
  start_date,
  target_date,
  title,
  link,
  banner_id,
}) {
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const timeZone = "America/Denver";
  const currentDate = new Date().toLocaleString("en-US", {
    timeZone: timeZone,
  });
  const dateObj = new Date(currentDate);

  const formattedDate = dateObj.toISOString().slice(0, 19);
  const offset = new Date().getHours() - new Date().getUTCHours();
  const timezoneOffset =
    (offset < 0 ? "-" : "+") +
    String(Math.abs(offset)).padStart(2, "0") +
    ":00";
  const converted_target_date = new Date(target_date);

  const unix_target_date = converted_target_date.getTime();

  const updateRemainingTime = () => {
    const currentUnixEpoch = new Date().getTime();
    const timeDifference = unix_target_date - currentUnixEpoch;

    if (timeDifference > 0) {
      const remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert ms to days
      const remainingHours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ); // Convert remaining ms to hours
      const remainingMinutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      ); // Convert remaining ms to minutes
      const remainingSeconds = Math.floor(
        (timeDifference % (1000 * 60)) / 1000
      ); // Convert remaining ms to seconds

      setRemainingTime({
        days: remainingDays,
        hours: remainingHours,
        minutes: remainingMinutes,
        seconds: remainingSeconds,
      });
    } else {
      // If the target date has passed
      setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };
  useEffect(() => {
    // Initial update
    updateRemainingTime();

    // Set an interval to update the remaining time every second
    const intervalId = setInterval(updateRemainingTime, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  const serverDate = formattedDate + timezoneOffset;

  return (
    <div className="template-container">
      {serverDate >= start_date && serverDate <= target_date ? (
        <div className="template-wrapper">
          <h4>{title}</h4>

          <img src={`./src/assets/events/${banner_id}.png`} />
          <div>
            {remainingTime.days} days, {remainingTime.hours} hours,{" "}
            {remainingTime.minutes} minutes, {remainingTime.seconds} seconds
          </div>
        </div>
      ) : null}
    </div>
  );
}
