import { siteConfig } from "@/lib/site-config";

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${siteConfig.phone}`}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center bg-red-600 py-3 text-center text-base font-bold text-white sm:hidden"
    >
      Call Now: {siteConfig.phoneDisplay}
    </a>
  );
}
