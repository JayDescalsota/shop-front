import { NextRequest, NextResponse } from 'next/server';

const AUTH_URL = process.env.AUTH_SERVICE_URL || 'http://localhost:8081/query';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const gqlBody = {
      query: `mutation Login($input: LoginInput!) { login(input: $input) { token user { id email name role } } }`,
      variables: { input: { email, password } },
    };

    const res = await fetch(AUTH_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gqlBody),
    });

    const data = await res.json();

    if (data.errors?.[0]?.message) {
      return NextResponse.json({ error: data.errors[0].message }, { status: 401 });
    }

    if (!data.data?.login?.token) {
      return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }

    const token = data.data.login.token;
    const response = NextResponse.json({ token, user: data.data.login.user });

    response.cookies.set('token', token, {
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      maxAge: 86400,
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json({ error: 'Backend connection failed' }, { status: 502 });
  }
}
