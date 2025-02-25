import { FreshContext } from "$fresh/server.ts";

const kv = await Deno.openKv();
const key = ["data"];
type record = {
  time: number;
  text: string;
  ip: string;
};

export const handler = async (
  req: Request,
  ctx: FreshContext,
): Promise<Response> => {
  const obj = await kv.get(key);
  const val: record[] = obj.value ?? [];

  if (req.method === "POST") {
    const form = await req.formData();
    const email = form.get("email")?.toString();

    if (email !== undefined) {
      val.push({
        time: Date.now(),
        text: email,
        ip: ctx.remoteAddr.hostname,
      });
      await kv.set(key, val);
    }
  }

  const body = `${JSON.stringify(val)}.`;
  return new Response(body);
};
