<script>
  import { _ } from "svelte-i18n";
  import { metatags } from "@roxi/routify";
  $: metatags.title = $_("index.title");
  $: metatags.description = $_("index.description");
</script>

<h1 class="bg-reepolee-500 text-white">&lt;h1 class="bg-reepolee-500 text-white"&gt;</h1>
<div class="p-8">
  <p class="font-bold">{$_("index.description")}</p>
  <p class="my-8">
    {@html $_("index.content")}
  </p>
  <a href="/about" class="text-link">{$_("index.goto.about")}</a>
</div>
