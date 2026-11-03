"use client";

import { useEffect, useState } from "react";

/**
 * The copyright year follows the current year.
 *
 * The year is resolved on the client, so the server never touches a dynamic
 * API (the site runs with Cache Components) and the page stays static. Until
 * the year is known the text stays complete — no layout shift, no flicker.
 */
export function CopyrightYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <span suppressHydrationWarning>
      {year
        ? `© ${year} KAMA Spa. All rights reserved.`
        : "© KAMA Spa. All rights reserved."}
    </span>
  );
}
