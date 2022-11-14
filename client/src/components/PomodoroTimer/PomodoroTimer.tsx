import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Props = {
  stylingClasses: string;
}

export default function PomodoroTimer({ stylingClasses }: Props) {
  
  const [time, setTime]: [number, Dispatch<SetStateAction<number>>] = useState(1500);
  
  // timer
  useEffect(() => { 
    const timer = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(timer);
   }, []);

  function formatTime(secondsToConvert: number) {
    /**
     * Converts seconds to a time string in the format of mm:ss.
     * @param {number} seconds    Number of seconds to format
     */
    const minutes: number = Math.floor(secondsToConvert / 60);
    const minutesString: string = (minutes < 10) ? `0${minutes}` : minutes.toString();
    const seconds: number = secondsToConvert % 60;
    const secondsString: string = (seconds < 10) ? `0${seconds}` : seconds.toString();
    return `${minutesString}:${secondsString}`
  }

  return (
    <div className={`${stylingClasses}`}>Time: {formatTime(time)}</div>
  )
}