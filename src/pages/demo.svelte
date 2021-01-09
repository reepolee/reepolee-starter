<script>
    import { _ } from "svelte-i18n";
    import { locale } from "../store.js";
    import { metatags, params } from "@roxi/routify";
    import { goto } from "@roxi/routify/runtime/helpers";
    import DatePickerInput from "../components/DatePickerInput.svelte";
    import FormField from "../components/FormField.svelte";
    import TextInput from "../components/TextInput.svelte";
    import hasError from "../validators/hasError";
    import dateAfter from "../validators/dateAfter";
    import dateBefore from "../validators/dateBefore";
    import required from "../validators/required";
    import minLength from "../validators/minLength";

    $: pageNo = $params.page ? "#" + $params.page : "";
    $: metatags.title = "Kitchen sink " + pageNo;

    let record = {
        first_name: { value: "Aleš", error: "" },
        last_name: { value: "V", error: "" },
        date_from: {
            value: new Date().toISOString().slice(0, 10),
            error: "",
        },
        date_to: { value: "2025-12-31", error: "" },
    };

    $: errorBag = checkRecord(record, $locale);
    $: isValidRecord = errorBag.length === 0;

    function checkRecord(record, locale) {
        let errorBag = [];

        hasError(record, "date_from", $_("validation.date"), errorBag);
        hasError(record, "date_to", $_("validation.date"), errorBag);
        dateAfter(
            record,
            "date_from",
            "2020-01-01",
            $_("validation.date_after", { values: { date: "2020-01-01" } }),
            errorBag
        );
        dateBefore(
            record,
            "date_to",
            "2021-31-12",
            $_("validation.date_before", { values: { date: "2020-31-01" } }),
            errorBag
        );
        required(record, "first_name", $_("validation.required"), errorBag);
        minLength(
            record,
            "last_name",
            1,
            $_("validation.min_length", { values: { chars: 1 } }),
            errorBag
        );

        return errorBag;
    }

    function handleFormSubmit() {
        return;
        window.alert(record.date);
    }

    function linkToRandomPage() {
        let p = Math.floor(Math.random() * 100);
        $goto("?q=reepolee&page=" + p);
    }

    function displayErrors(errorBag, fieldName) {
        let filtered = errorBag.filter((el) => el.field === fieldName);
        let ret = filtered.length > 0 ? filtered[0].message : "";
        return ret;
    }
</script>

<style>
    pre {
        @apply font-bold;
        @apply mb-4;
    }
</style>

<div class="px-8">
    <p class="font-bold">{$_('components.date.description')}</p>
    <form on:submit|preventDefault={handleFormSubmit} class="py-4">
        <FormField invalid={record.first_name.error.length > 0}>
            <label for="first_name">{$_('components.first_name.label')}</label>
            <TextInput bind:value={record.first_name.value} name="first_name" />
            <div class="explain">{$_('components.first_name.explain')}</div>
            <div class="errors">
                {@html displayErrors(errorBag, 'first_name')}
            </div>
        </FormField>
        <FormField invalid={record.last_name.error.length > 0}>
            <label for="last_name">{$_('components.last_name.label')}</label>
            <TextInput bind:value={record.last_name.value} name="last_name" />
            <div class="explain">{$_('components.last_name.explain')}</div>
            <div class="errors">
                {@html displayErrors(errorBag, 'last_name')}
            </div>
        </FormField>

        <div class="flex flex-col md:flex-row space-y-2 md:space-x-4 ">
            <FormField invalid={record.date_from.error.length > 0}>
                <label for="date_from">{$_('components.date.label')}</label>
                <DatePickerInput
                    class="input"
                    id="date_from"
                    bind:errorMessage={record.date_from.error}
                    bind:dateValue={record.date_from.value} />
                <div class="explain">Set in advance</div>
                <div class="errors">
                    {@html displayErrors(errorBag, 'date_from')}
                </div>
            </FormField>
            <FormField invalid={record.date_to.error.length > 0}>
                <label for="date_to">{$_('components.date.label')}</label>
                <DatePickerInput
                    class="input"
                    id="date_to"
                    bind:errorMessage={record.date_to.error}
                    bind:dateValue={record.date_to.value} />
                <div class="explain">Null by default</div>
                <div class="errors">
                    {@html displayErrors(errorBag, 'date_to')}
                </div>
            </FormField>
        </div>
    </form>

    <p>{$_('components.date.actual_date_values')}</p>
    <pre>
        {record.date_from.value}, {record.date_to.value}
    </pre>
    <p>
        {$_('components.query_params')}
        <button
            class="underline font-bold ml-2"
            on:click={linkToRandomPage}>Test</button>
    </p>
    <pre>{JSON.stringify($params)}</pre>
    <pre>{$locale}</pre>

    <p>Valid record: {isValidRecord}, errorBag: {JSON.stringify(errorBag)}</p>
    <p class="pt-24"><a href="/" class="text-link">{$_('goto.index')}</a></p>
</div>
