"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { siteConfig, servicePages } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";

export default function HeroLeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      if (response.status === 503) {
        setStatus("unavailable");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-green-200 bg-green-50 p-6 text-center shadow-lg"
      >
        <p className="font-semibold text-green-900">Thanks — your request was received.</p>
        <p className="mt-2 text-sm text-green-800">
          We&apos;ll be in touch shortly. For urgent issues, please call us directly.
        </p>
      </div>
    );
  }

  if (status === "unavailable" || status === "error") {
    return (
      <div
        role="alert"
        className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-lg"
      >
        <p className="font-semibold text-brand-navy">
          Online estimates are being connected.
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Please call {siteConfig.phoneDisplay} for immediate help.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-light"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-3 rounded-xl bg-white p-5 shadow-2xl sm:p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue">
        Get a Free Estimate
      </p>
      <div>
        <label htmlFor="hero-name" className="sr-only">
          Name
        </label>
        <input
          id="hero-name"
          name="name"
          type="text"
          required
          placeholder="Name"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="hero-phone" className="sr-only">
          Phone
        </label>
        <input
          id="hero-phone"
          name="phone"
          type="tel"
          required
          placeholder="Phone"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="hero-service" className="sr-only">
            Service Needed
          </label>
          <select
            id="hero-service"
            name="service"
            required
            defaultValue=""
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
          >
            <option value="" disabled>
              Service Needed
            </option>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="hero-cityZip" className="sr-only">
            City / ZIP
          </label>
          <input
            id="hero-cityZip"
            name="cityZip"
            type="text"
            required
            placeholder="City / ZIP"
            className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label htmlFor="hero-message" className="sr-only">
          Message (optional)
        </label>
        <textarea
          id="hero-message"
          name="message"
          rows={2}
          placeholder="Message (optional)"
          className="w-full rounded-md border border-zinc-300 px-3 py-2.5 text-sm focus:border-brand-blue focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center rounded-md bg-brand-orange px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-900/30 transition-colors hover:bg-brand-orange-light disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Get My Free Estimate"}
      </button>
    </form>
  );
}
