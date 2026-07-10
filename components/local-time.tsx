"use client";

import { useEffect, useState } from "react";

export function LocalTime({ timezone, city }: { timezone: string; city: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const t = new Intl.DateTimeFormat("en-GB", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
      setTime(t);
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timezone]);

  return (
    <span className="tabular-nums">
      {time || "--:--"} <span className="text-mute">·</span> {city}
    </span>
  );
}
