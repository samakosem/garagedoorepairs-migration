import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import type { FaqItem } from "@/lib/site-config";

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs,
  schema = true,
}: {
  title?: string;
  faqs: FaqItem[];
  schema?: boolean;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      {schema && <JsonLd data={faqPageSchema(faqs)} />}
      <h2 className="text-3xl font-bold text-zinc-900 text-center">{title}</h2>
      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-zinc-200 bg-white p-5"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-zinc-900">
              {faq.question}
              <span className="ml-4 text-zinc-400 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
