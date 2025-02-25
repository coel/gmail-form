import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  GET(_req, { remoteAddr }) {
    console.log(`Visit from ${remoteAddr.hostname} at index`);

    return new Response("", {
      status: 302,
      headers: { Location: "/form" },
    });
  },
};
