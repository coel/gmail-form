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
        <form action="/api/add" class="kinde-form" data-kinde-form="true" method="post" name="sign_up_sign_in_credentials">
          <input class="kinde-control-select-text" data-kinde-control-select-text="true" data-kinde-control-select-text-variant="text" id="sign_up_sign_in_credentials_p_email" name="p_email" required="" kui-input-persist="true" autocapitalize="off" autocomplete="email" spellcheck="false" type="email" value={hint} inputmode="email" />
          <button class="kinde-button kinde-button-variant-primary" data-kinde-button="true" data-kinde-button-variant="primary" type="submit"> 
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
