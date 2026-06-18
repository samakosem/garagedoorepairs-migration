import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  service?: string;
  cityZip?: string;
  message?: string;
};

// TODO: wire to Resend once RESEND_API_KEY is configured. Does not send fake
// success responses - if the backend isn't configured, callers get a clear
// 503 so the UI can fall back to "please call us" messaging.
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

  // Real Resend send will go here once RESEND_API_KEY is set. Left
  // unimplemented intentionally - do not fake a success response.
  return NextResponse.json(
    {
      ok: false,
      error: "lead_backend_not_implemented",
      message: "Online estimate requests are not yet connected.",
    },
    { status: 503 }
  );
}
