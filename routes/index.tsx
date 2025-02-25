import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(req, { remoteAddr }) {
    console.log(`Visit from ${remoteAddr.hostname} at index`);

    const url = new URL(req.url);
    const params = url.searchParams;
    params.append("time", Date.now().toString());
    return new Response("", {
      status: 302,
      headers: { Location: `/form?${params}` },
    });
  },
};
