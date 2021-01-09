<script>
  import { _ } from "svelte-i18n";
  import { url } from "@roxi/routify";
</script>

<style>
  .e404 {
    display: grid;
    place-items: center;
    place-content: center;
    height: 100%;
  }

  img {
    width: 192px;
    height: 192px;
    @apply my-4;
  }
</style>

<div class="e404 space-y-4">
  <p class="text-3xl">{$_('page.404')}</p>
  <img src="/images/touch-icons/logo-192.png" alt={$_('app.head.company')} />
  <!-- link to the parent folder of _fallback.svelte -->
  <button
    class="text-link px-4"
    on:click={() => {
      window.history.go(-1);
      return false;
    }}>
    {$_('page.goback')}
  </button>
</div>
