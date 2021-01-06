<script>
    import { _ } from "svelte-i18n";
    import { metatags } from "@roxi/routify";
    import ModernImage from "../components/ModernImage.svelte";
    $: metatags.title = $_("about.title");
    $: metatags.description = $_("about.description");
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
        src="/responsive/reepolee-labs.jpg"
        alt={$_('app.head.company')} />
    <div class="mb-8" />
    <a href="/">{$_('about.goto.index')}</a>
</div>
