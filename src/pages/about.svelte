<script>
    import { fly } from "svelte/transition";
    import { _ } from "svelte-i18n";
    import { metatags } from "@roxi/routify";
    import ModernImage from "../components/ModernImage.svelte";
    $: metatags.title = $_("about.title");
    $: metatags.description = $_("about.description");
    let isLoaded;
    let isVisible;
</script>

<h1 class="bg-blue-500 text-white">
    &lt;h1 class="bg-blue-500 text-white"&gt;
</h1>
<div class="p-8">
    <p class="font-bold">{$_('about.description')}</p>
    <p class="mb-8">
        {@html $_('about.de_not_translated')}
    </p>
    <p class="mb-8 font-bold">
        {@html $_('about.content')}
    </p>
    <p style="padding-bottom:2000px">{$_('about.lazyloading')}</p>
    <ModernImage
        bind:loaded={isLoaded}
        bind:visible={isVisible}
        src="/responsive/reepolee-labs.jpg"
        alt={$_('app.head.company')} />
    <div class="mb-8" />
    <a href="/">{$_('about.goto.index')}</a>
</div>
{#if isLoaded}
    <div
        class="fixed mt-32 top-0 right-12 p-3 bg-red-500 text-white z-10"
        transition:fly={{ x: 2000 }}>
        {$_('demo.bottom_image_loaded')}
    </div>
{/if}

{#if isVisible}
    <div
        class="fixed mt-48 top-0 right-12 p-3 bg-blue-500 text-white z-10"
        transition:fly={{ x: 2000 }}>
        {$_('demo.bottom_image_in_viewport')}
    </div>
{/if}
