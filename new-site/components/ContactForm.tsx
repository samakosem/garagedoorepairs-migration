"use client";

import { useState } from "react";
import { servicePages, siteConfig } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "unavailable" | "error";

export default function ContactForm() {
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
        body: JSON.stringify({ ...data, pageUrl: window.location.href }),
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
        className="rounded-xl border border-green-200 bg-green-50 p-8 text-center"
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
        className="rounded-xl border border-zinc-200 bg-white p-8 text-center"
      >
        <p className="font-semibold text-brand-navy">
          Online requests are being connected.
        </p>
        <p className="mt-2 text-sm text-zinc-600">
          Please call {siteConfig.phoneDisplay} for immediate help.
        </p>
        <a
          href={`tel:${siteConfig.phone}`}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-orange-light"
        >
          Call {siteConfig.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-zinc-200 bg-white p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-zinc-700">
            Service Needed
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
          >
            <option value="">Select a service</option>
            {servicePages.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="cityZip" className="block text-sm font-medium text-zinc-700">
            City / ZIP
          </label>
          <input
            id="cityZip"
            name="cityZip"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border border-zinc-300 px-3 py-2 text-sm focus:border-zinc-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-red-600 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-red-500 disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Request Service"}
      </button>
    </form>
  );
}
