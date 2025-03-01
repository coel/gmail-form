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
        <div class="kinde-form-field kinde-form-field-variant-select-text" data-kinde-form-field="true" data-kinde-form-field-variant="select-text">
          <label class="kinde-control-label" data-kinde-control-label="true" for="sign_up_sign_in_credentials_p_email">メール</label> 
          <input class="kinde-control-select-text" data-kinde-control-select-text="true" data-kinde-control-select-text-variant="text" id="sign_up_sign_in_credentials_p_email" name="p_email" required="" kui-input-persist="true" autocapitalize="off" autocomplete="email" spellcheck="false" type="email" value={hint} inputmode="email" />
        </div>
          <button class="kinde-button kinde-button-variant-primary" data-kinde-button="true" data-kinde-button-variant="primary" type="submit"> 
            <span class="kinde-button-text" data-kinde-button-text="true">Continue</span>
          </button>
          <template>
            <span class="kinde-form-submit-spinner" data-kinde-form-submit-spinner="true">
              <span aria-hidden="true" data-kinde-spinner="true" class="kinde-spinner kinde-spinner-size-default">
                <svg data-kinde-spinner-loader="true" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">		<g fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-width="8px">			<circle cx="50" cy="50" r="45"></circle>			<circle cx="50" cy="50" r="45"></circle>		</g>	</svg>
                </span>
              </span>
          </template>
        </form>
      </div>
    </div>
  );
}
