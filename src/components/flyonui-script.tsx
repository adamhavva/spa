"use client";

import Script from "next/script";
import { useEffect } from "react";

type FlyonUIWindow = Window & {
  HSCollapse?: { autoInit?: () => void };
  HSDropdown?: { autoInit?: () => void };
};

/**
 * Loads the FlyonUI runtime and boots its components.
 *
 * FlyonUI only wires itself up inside a `window.load` listener. Because the
 * script is loaded lazily (after hydration), that event has usually already
 * fired by then — so we call `autoInit()` ourselves once the file is ready.
 */
export function FlyonUIScript() {
  useEffect(() => {
    const w = window as FlyonUIWindow;
    let timer: ReturnType<typeof setInterval> | undefined;

    const boot = () => {
      w.HSCollapse?.autoInit?.();
      w.HSDropdown?.autoInit?.();
    };

    if (w.HSCollapse) {
      boot();
    } else {
      /* Fallback in case the load event was missed. */
      timer = setInterval(() => {
        if (w.HSCollapse) {
          clearInterval(timer);
          boot();
        }
      }, 60);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <Script
      src="/flyonui.js"
      strategy="lazyOnload"
      onLoad={() => {
        const w = window as FlyonUIWindow;
        w.HSCollapse?.autoInit?.();
        w.HSDropdown?.autoInit?.();
      }}
    />
  );
}
