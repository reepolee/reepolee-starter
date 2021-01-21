<!-- routify:options apreload="proximity" -->
<script>
  import { _ } from "svelte-i18n";
  import { isActive, url } from "@roxi/routify";
  import Icon from "@/components/Icon.svelte";
  import LocaleSwitcher from "@/components/LocaleSwitcher.svelte";
  import ThemeSwitcher from "@/components/ThemeSwitcher.svelte";

  let uppercase = true;

  $: pages = [
    ["/", $_("index.title"), "/index"], // path, title, route name
    ["/about", $_("about.title"), "/about"],
    ["/demo", $_("demo.title"), "/demo"],
    ["/should-404", "404", "/should-404"], // here for testing purposes of _fallback only
  ];

  function doLogin() {
    window.alert($_("auth.login.implement"));
  }
</script>

<div class="text-lg tracking-tight">
  <header>
    <div style="width:200px">
      <img src="/images/logo.svg" alt={$_("app.head.company")} class="h-6 my-2" />
    </div>
    <div class="font-bold text-center px-12">{$_("app.head.title")}</div>

    <button class="flex items-center my-4" on:click={doLogin}>
      <Icon name="login" class="h-6 w-6" />
      {$_("auth.login.caption")}
    </button>
  </header>
  <main>
    <aside class="flex flex-col justify-between">
      <div class="flex flex-col">
        {#each pages as [path, title, name]}
          <a href={$url(path)} class="p-2 link" class:active={$isActive(name)} class:uppercase>{title}</a>
        {/each}
      </div>
      <div class="flex justify-between px-2">
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </aside>
    <article class="p-4 flex flex-col w-full">
      <slot />
    </article>
  </main>
</div>
