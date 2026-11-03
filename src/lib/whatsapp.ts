/**
 * WhatsApp is the single contact channel of the site.
 *
 * Every WhatsApp URL is built here — never hardcode a `wa.me` link in a
 * page or a component. The message wording is intentional: the guest reads
 * it inside WhatsApp.
 */

/** KAMA Spa line — `wa.me` wants digits only (no `+`, no dashes). */
export const WHATSAPP_NUMBER = "6281316052040";

/** "Talk to Roy" line, used by the corporate wellness page. */
export const CORPORATE_NUMBER = "6281314856565";

/** Generic booking — floating button, header CTA, corporate enquiries. */
export const RESERVE_MESSAGE = "Halo kak, saya mau reservasi";

/** Membership enquiries. */
export const MEMBER_MESSAGE = "Halo kak, saya mau join member";

/** Per-branch message: "is this branch open, can I book?" */
export function locationMessage(address: string): string {
  return `Halo kak, apakah yang di ${address} sudah buka dan bisa reservasi sekarang ?`;
}

/** Build a WhatsApp deep link for `message`. */
export function waLink(message: string, number: string = WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** WhatsApp link for one specific branch (uses the branch address). */
export function locationWhatsApp(location: { address: string }): string {
  return waLink(locationMessage(location.address));
}

/** WhatsApp link for the corporate wellness line. */
export function corporateWhatsApp(): string {
  return waLink(RESERVE_MESSAGE, CORPORATE_NUMBER);
}
