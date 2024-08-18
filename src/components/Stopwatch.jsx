import React, { useState, useEffect } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!running && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, time]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="text-2xl font-bold mb-2">{formatTime(time)}</div>
      <div className="flex gap-2">
        {!running && (
          <button
            onClick={handleStart}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
        )}
        {running && (
          <button
            onClick={handleStop}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        )}
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
        
      </div>
      <p className='text-blue-300 mt-4'>Manage your Rest time</p>
    </div>
  );
}
