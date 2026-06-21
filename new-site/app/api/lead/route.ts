import { NextResponse } from "next/server";
import { Resend } from "resend";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  cityZip?: string;
  message?: string;
  pageUrl?: string;
};

const LEAD_NOTIFICATION_EMAIL = "danibrisen1@gmail.com";
const LEAD_FROM_EMAIL = "Garage Door Repairs Leads <onboarding@resend.dev>";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body.name || !body.phone) {
    return NextResponse.json(
      { ok: false, error: "Name and phone are required." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    return NextResponse.json(
      {
        ok: false,
        error: "lead_backend_not_configured",
        message: "Online estimate requests are not yet connected.",
      },
      { status: 503 }
    );
  }

  const resend = new Resend(resendApiKey);

  const fields: Array<[string, string | undefined]> = [
    ["Name", body.name],
    ["Phone", body.phone],
    ["Email", body.email],
    ["Service Requested", body.service],
    ["City / ZIP", body.cityZip],
    ["Message", body.message],
    ["Page URL", body.pageUrl],
  ];

  const textBody = fields
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const htmlBody = `
    <h2>New Garage Door Repair Lead</h2>
    <table cellpadding="6" cellspacing="0" border="0">
      ${fields
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(String(value))}</td></tr>`
        )
        .join("")}
    </table>
  `;

  try {
    const { error } = await resend.emails.send({
      from: LEAD_FROM_EMAIL,
      to: LEAD_NOTIFICATION_EMAIL,
      replyTo: body.email || undefined,
      subject: `New Lead: ${body.name} — ${body.service || "Garage Door Service"}`,
      text: textBody,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend send error:", error);
      return NextResponse.json(
        { ok: false, error: "lead_send_failed", message: "Could not send lead notification." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("Resend send threw:", err);
    return NextResponse.json(
      { ok: false, error: "lead_send_failed", message: "Could not send lead notification." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
