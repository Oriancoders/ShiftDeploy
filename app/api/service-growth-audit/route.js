import { NextResponse } from 'next/server';

const requiredFields = ['name', 'email', 'phone', 'service_type'];

export async function POST(request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      { error: 'Google Sheets webhook is not configured.' },
      { status: 500 }
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const missingFields = requiredFields.filter((field) => !String(payload?.[field] || '').trim());
  if (missingFields.length > 0) {
    return NextResponse.json(
      { error: `Missing required fields: ${missingFields.join(', ')}` },
      { status: 400 }
    );
  }

  const sheetPayload = {
    submitted_at: new Date().toISOString(),
    source: 'service-growth-audit',
    name: String(payload.name || '').trim(),
    email: String(payload.email || '').trim(),
    country_code: String(payload.country_code || '').trim(),
    phone: String(payload.phone || '').trim(),
    full_phone: String(payload.full_phone || '').trim(),
    website: String(payload.website || '').trim(),
    service_type: String(payload.service_type || '').trim(),
    message: String(payload.message || '').trim(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(sheetPayload),
    });

    if (!response.ok) {
      const responseText = await response.text();
      return NextResponse.json(
        { error: 'Google Sheets webhook request failed.', details: responseText },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Unable to upload audit request to Google Sheets.' },
      { status: 502 }
    );
  }
}
