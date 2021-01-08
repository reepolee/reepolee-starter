<script>
    import { _ } from "svelte-i18n";
    import { metatags } from "@roxi/routify";
    import { params } from "@roxi/routify";
    import DatePickerInput from "../components/DatePickerInput.svelte";
    import { goto } from "@roxi/routify/runtime/helpers";
    $: pageNo = $params.page ? "#" + $params.page : "";
    $: metatags.title = "Kitchen sink " + pageNo;

    let form = {
        date_from: new Date().toISOString().slice(0, 10),
        date_to: "2025-12-31",
    };

    function handleFormSubmit() {
        return;
        window.alert(form.date);
    }

    function linkToRandomPage() {
        let p = Math.floor(Math.random() * 100);
        $goto("?q=reepolee&page=" + p);
    }
</script>

<style>
    form div.field label {
        @apply pl-2;
    }

    .field {
        @apply pb-6;
    }

    pre {
        @apply font-bold;
        @apply mb-4;
    }
</style>

<div class="p-8">
    <p class="font-bold">{$_('components.date.description')}</p>

    <form on:submit|preventDefault={handleFormSubmit}>
        <div class="field">
            <label for="date_from">{$_('components.date.label')}</label>
            <DatePickerInput id="date_from" bind:dateValue={form.date_from} />
        </div>
        <div class="field">
            <label for="date_to">{$_('components.date.label')}</label>
            <DatePickerInput id="date_to" bind:dateValue={form.date_to} />
        </div>
    </form>

    <p>{$_('components.date.actual_date_values')}</p>
    <pre>
        {form.date_from}, {form.date_to}
    </pre>
    <p>
        {$_('components.query_params')}
        <button
            class="underline font-bold ml-2"
            on:click={linkToRandomPage}>Test</button>
    </p>
    <pre>{JSON.stringify($params)}</pre>

    <p class="pt-24"><a href="/">{$_('goto.index')}</a></p>
</div>
