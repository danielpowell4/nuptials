"use client";

import * as React from "react";
import styles from "./Countdown.module.css";

const Counter = ({ count, label }) => (
  <div className={styles.Counter}>
    <div className="count">{count}</div>
    <div className="label">{label}</div>
  </div>
);

const Countdown = ({ title, until }) => {
  const [msecsLeft, setMsecsLeft] = React.useState(until - Date.now());

  const secs = Math.floor(msecsLeft / 1000) % 60;
  const mins = Math.floor(msecsLeft / (60 * 1000)) % 60;
  const hours = Math.floor(msecsLeft / (60 * 60 * 1000)) % 24;
  const days = Math.floor(msecsLeft / (24 * 60 * 60 * 1000));

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMsecsLeft((prev) => prev - 1000);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2 style={{ marginBottom: '1rem' }}>{title}</h2>
      <div className={styles.Countdown}>
        {days && <Counter count={days} label="days" />}
        {hours && <Counter count={hours} label="hours" />}
        {mins && <Counter count={mins} label="minutes" />}
        <Counter count={secs} label="seconds" />
      </div>
    </div>
  );
};


export default Countdown;
