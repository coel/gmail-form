import { PageProps } from "$fresh/server.ts";

export default function Form( {url, remoteAddr} : PageProps<string>) {
  const hint = url.searchParams.get("login_hint") ?? "hello@example.com";
  console.log(`Visit from ${remoteAddr.hostname} at form`);
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
        <form action="/api/add" method="post" name="sign_in">
          <input type="text" name="email" value={hint} />
          <input type="hidden" name="p_identity_type" value="email" />
          <button type="submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
