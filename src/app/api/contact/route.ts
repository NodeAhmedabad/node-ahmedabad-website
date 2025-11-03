import config from '@/config';

import type { Route } from '@/types/next';

export const POST: Route = async (request) => {
  const { json } = request;

  try {
    const body = await json();

    const res = await fetch(`${config.SUPABASE_URL}/rest/v1/contacts`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        apiKey: config.SUPABASE_API_KEY,
        Prefer: 'return=representation',
      },
    });

    const data = await res.json();

    if (res.ok) {
      return Response.json(
        {
          status: res.status,
          message: 'Contact Created Successfully',
          data: {
            id: data[0].id,
          },
        },
        {
          status: res.status,
        },
      );
    }

    throw new Error(data.message);
  } catch (error) {
    return Response.json(
      {
        status: 400,
        message: error instanceof Error ? error.message : 'Something went wrong',
      },
      {
        status: 400,
      },
    );
  }
};
