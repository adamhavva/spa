import type { Location } from "@/data/content";
import { LocationPin, Clock, WhatsApp } from "@/components/icons";
import { locationWhatsApp } from "@/lib/whatsapp";

export function LocationInfo({ loc }: { loc: Location }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display text-title-sm">
        {loc.name} | {loc.area}
      </h3>
      <div className="flex items-center gap-2 text-body text-cocoa/70">
        <LocationPin className="h-4 w-4 shrink-0" />
        <span>{loc.address}</span>
      </div>
      <div className="flex items-center gap-2 text-body text-cocoa/70">
        <Clock className="h-4 w-4 shrink-0" />
        <span>{loc.hours}</span>
      </div>
      <div className="flex items-center gap-2 text-body text-cocoa/70">
        <WhatsApp className="h-4 w-4 shrink-0" />
        <a
          href={locationWhatsApp(loc)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {loc.phone}
        </a>
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        <a
          className="btn btn-primary"
          href={locationWhatsApp(loc)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          className="btn btn-outline border-cocoa/40 text-cocoa"
          href={loc.mapDirections}
          target="_blank"
          rel="noopener noreferrer"
        >
          Dapatkan Rute
        </a>
      </div>
    </div>
  );
}
