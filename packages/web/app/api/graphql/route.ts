import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.GRAPHQL_URL || 'http://localhost:4000/graphql/query';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const forwardedHeaders: Record<string, string> = { 'Content-Type': 'application/json' };
    const passHeaders = ['authorization', 'x-tenant-id', 'x-user-id', 'x-app-id', 'x-branch-id'];
    for (const h of passHeaders) {
      const val = req.headers.get(h);
      if (val) forwardedHeaders[h] = val;
    }
    const res = await fetch(BACKEND_URL, {
      method: 'POST',
      headers: forwardedHeaders,
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { errors: [{ message: 'Backend connection failed' }] },
      { status: 502 },
    );
  }
}
