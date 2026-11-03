"use client";

import { useEffect, useRef } from "react";
import type { Location } from "@/data/content";

const COORDS: Record<string, [number, number]> = {
  "south-jakarta": [-6.2438873, 106.7935745],
  sudirman: [-6.2247181, 106.8106879],
  kebayoran: [-6.2264582, 106.8014745],
};

export function LocationMap({ locations }: { locations: Location[] }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const L = (window as any).L;
    if (!L) return;

    const center: [number, number] = [-6.234, 106.801];
    const map = L.map(mapRef.current).setView(center, 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    locations.forEach((loc) => {
      const c = COORDS[loc.slug];
      if (!c) return;

      const marker = L.circleMarker(c, {
        radius: 18,
        fillColor: "#4A2C1A",
        color: "#ffffff",
        weight: 4,
        opacity: 1,
        fillOpacity: 1,
      }).addTo(map);

      marker.bindPopup(
        `<div style="min-width:220px;padding:4px"><b style="font-size:16px;color:#4A2C1A">${loc.name}</b><br/><span style="color:#666;font-size:13px">${loc.address}</span><br/><br/><a href="${loc.mapDirections}" target="_blank" rel="noopener noreferrer" style="color:#4A2C1A;font-weight:600;font-size:14px">Buka di Maps ↗</a></div>`,
        { maxWidth: 300 }
      );
    });

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, [locations]);

  return (
    <div
      ref={mapRef}
      className="h-[400px] w-full rounded-sm"
      style={{ zIndex: 0 }}
    />
  );
}
