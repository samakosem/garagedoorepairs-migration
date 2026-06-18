import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-brand-orange py-3 text-center text-base font-bold text-white shadow-[0_-4px_12px_rgba(0,0,0,0.15)] sm:hidden"
    >
      <Phone className="h-5 w-5" aria-hidden="true" />
      Call Now: {siteConfig.phoneDisplay}
    </a>
  );
}
